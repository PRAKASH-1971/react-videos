import axios from 'axios';

const KEY  = 'AIzaSyAB7L2RSAAzPLEUcIu0VMpyMS9RJc3V6PQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});
