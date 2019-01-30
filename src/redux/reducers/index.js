import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import loadingReducer from "./loadingReducer";
import subredditReducer from "./subredditReducer";
import afterReducer from "./afterReducer";
import beforeReducer from "./beforeReducer";

const rootReducer = combineReducers({
  subreddit: subredditReducer,
  posts: postsReducer,
  isLoading: loadingReducer,
  before: beforeReducer,
  after: afterReducer
});

export default rootReducer;
