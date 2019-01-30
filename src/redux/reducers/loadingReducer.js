import { IS_FETCHING } from "./../actions/types";

const loadingReducer = (state = false, action) => {
  const { type, bool } = action;
  switch (type) {
    case IS_FETCHING:
      return bool;

    default:
      return state;
  }
};

export default loadingReducer;
