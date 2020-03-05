import axios from 'axios';

const KEY = 'AIzaSyA0FmfsQzM5PEWq6xH7s5i0eOA-C1OX6Jw';

export const baseParams = {
  part: 'snippet',
  maxResults: 5,
  key: KEY,
  type: 'video'
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});
