import { STORE_AFTER } from "./../actions/types";

const afterReducer = (state = "", action) => {
  const { type, payload } = action;
  switch (type) {
    case STORE_AFTER:
      return payload;

    default:
      return state;
  }
};

export default afterReducer;
