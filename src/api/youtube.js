import axios from 'axios';

const KEY = 'GoogleApikey';

export const baseParams = {
  part: 'snippet',
  maxResults: 5,
  key: KEY,
  type: 'video'
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});
