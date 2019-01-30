import api from "./../../api/api";

const url = "https://www.reddit.com/r/";

const fetchPosts = async subreddit => {
  const response = await api.get(url, subreddit);
  return response;
};

const fetchNextPosts = async (subreddit, after) => {
  const response = await api.getNextPosts(url, subreddit, after);
  return response;
};

const fetchPrevPosts = async (subreddit, before) => {
  const response = await api.getPrevPosts(url, subreddit, before);
  return response;
};
export default {
  fetchPosts,
  fetchNextPosts,
  fetchPrevPosts
};
