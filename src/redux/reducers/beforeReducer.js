import { STORE_BEFORE } from "./../actions/types";

const beforeReducer = (state = "", action) => {
  const { type, payload } = action;
  switch (type) {
    case STORE_BEFORE:
      return payload;

    default:
      return state;
  }
};

export default beforeReducer;
