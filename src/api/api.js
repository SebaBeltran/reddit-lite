import axios from "axios";
const get = (url, term) => {
  const posts = axios
    .get(`${url}${term}/new.json?limit=25`)
    .then(res => res.data.data)
    .catch(error => console.log(error));

  return posts;
};

const getNextPosts = (url, term, after) => {
  const newPosts = axios
    .get(`${url}${term}/new.json?limit=25&after=${after}`)
    .then(res => res.data.data)
    .catch(error => console.log(error));

  return newPosts;
};

const getPrevPosts = (url, term, before) => {
  const newPosts = axios
    .get(`${url}${term}/new.json?before=${before}`)
    .then(res => res.data.data)
    .catch(error => console.log(error));

  return newPosts;
};

export default {
  get,
  getNextPosts,
  getPrevPosts
};
