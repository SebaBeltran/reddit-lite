import {
  IS_FETCHING,
  POSTS_FETCHED,
  STORE_SUBREDDIT,
  STORE_AFTER,
  STORE_BEFORE,
  NEW_POSTS_FETCHED,
  MORE_POSTS_FETCHED
} from "./types";
import thunk from "./thunk";

function isFetching(bool) {
  return {
    type: IS_FETCHING,
    bool
  };
}

function postsFetched(payload) {
  return {
    type: POSTS_FETCHED,
    payload
  };
}

function morePostsFetched(payload) {
  return {
    type: MORE_POSTS_FETCHED,
    payload
  };
}

function newPostsFetched(payload) {
  return {
    type: NEW_POSTS_FETCHED,
    payload
  };
}

export function storeSubreddit(payload) {
  return {
    type: STORE_SUBREDDIT,
    payload
  };
}

function storeAfter(payload) {
  return {
    type: STORE_AFTER,
    payload
  };
}

function storeBefore(payload) {
  return {
    type: STORE_BEFORE,
    payload
  };
}

export const getPosts = subreddit => {
  return async dispatch => {
    dispatch(isFetching(true));
    const data = await thunk.fetchPosts(subreddit);
    const { children, after } = data;
    const posts = children.map(e => e.data);
    dispatch(postsFetched(posts));
    dispatch(storeBefore(posts[0].name));
    dispatch(storeAfter(after));
    dispatch(isFetching(false));
  };
};

export const getNextPosts = (subreddit, res) => {
  return async dispatch => {
    const data = await thunk.fetchNextPosts(subreddit, res);
    const { children, after } = data;
    const posts = children.map(e => e.data);
    dispatch(morePostsFetched(posts));
    dispatch(storeAfter(after));
  };
};

export const getPrevPosts = (subreddit, before) => {
  return async dispatch => {
    const data = await thunk.fetchPrevPosts(subreddit, before);
    const { children } = data;
    const posts = children.map(e => e.data);
    if (posts.length > 0) {
      dispatch(newPostsFetched(posts));
      dispatch(storeBefore(posts[0].name));
    }
  };
};
