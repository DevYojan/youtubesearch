import axios from 'axios';

const KEY = 'AIzaSyCPSlBUEd92Kaxb3vrZ_5ZskyXKKe2sUHs';

export const baseParams = {
  part: 'snippet',
  maxResults: 5,
  key: KEY,
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
}); 