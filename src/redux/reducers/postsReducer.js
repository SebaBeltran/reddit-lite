import {
  POSTS_FETCHED,
  NEW_POSTS_FETCHED,
  MORE_POSTS_FETCHED
} from "./../actions/types";

const postsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case POSTS_FETCHED:
      return payload;
    case NEW_POSTS_FETCHED:
      return [...payload, ...state];
    case MORE_POSTS_FETCHED:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default postsReducer;
