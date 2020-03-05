import React from 'react';
import SearchBar from './SearchBar';
import youtube, { baseParams } from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { query: '', videos: [], selectedVideo: null };

  componentDidMount() {
    this.searchVideo('Baby Shark');
  }

  handleInputChange = query => {
    this.setState({ query });
  };

  searchVideo = async query => {
    const { data } = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: query
      }
    });
    this.setState({ videos: data.items, selectedVideo: data.items[0] });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchVideo(this.state.query);
  };

  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar
          onInputChange={this.handleInputChange}
          onFormSubmit={this.handleFormSubmit}
        />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.handleVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
