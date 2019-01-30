import { STORE_SUBREDDIT } from "../actions/types";

const postsReducer = (state = "", action) => {
  const { type, payload } = action;
  switch (type) {
    case STORE_SUBREDDIT:
      return payload;

    default:
      return state;
  }
};

export default postsReducer;
