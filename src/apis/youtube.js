import axios from "axios";

const KEY = "AIzaSyDd26pKiaA83r_sJa2-q5GSmQ4SNQnT7fk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

