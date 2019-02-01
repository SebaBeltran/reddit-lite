import * as actions from "./actions";
import * as types from "./types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
// import fetchMock from "fetch-mock";

const middlewares = [thunk];
const storeMock = configureStore(middlewares);
const store = storeMock();

describe("Test", () => {
  afterEach(() => {
    store.clearActions();
    // fetchMock.restore();
  });

  describe("actions", () => {
    it("should create an action to store a subreddit", () => {
      const payload = "Subreddit";
      const expectedAction = [
        {
          type: types.STORE_SUBREDDIT,
          payload
        }
      ];
      store.dispatch(actions.storeSubreddit(payload));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe("actions", () => {
    it("should create an action to update isFetching", () => {
      const bool = true;
      const expectedAction = [
        {
          type: types.IS_FETCHING,
          bool
        }
      ];
      store.dispatch(actions.isFetching(bool));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe("actions", () => {
    it("should create an action to update posts", () => {
      const payload = [];
      const expectedAction = [
        {
          type: types.POSTS_FETCHED,
          payload
        }
      ];
      store.dispatch(actions.postsFetched(payload));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe("actions", () => {
    it("should create an action to update more posts", () => {
      const payload = [];
      const expectedAction = [
        {
          type: types.MORE_POSTS_FETCHED,
          payload
        }
      ];
      store.dispatch(actions.morePostsFetched(payload));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe("actions", () => {
    it("should create an action to update new posts", () => {
      const payload = [];
      const expectedAction = [
        {
          type: types.NEW_POSTS_FETCHED,
          payload
        }
      ];
      store.dispatch(actions.newPostsFetched(payload));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe("actions", () => {
    it("should create an action to store the name of the first post in the array", () => {
      const payload = "string";
      const expectedAction = [
        {
          type: types.STORE_BEFORE,
          payload
        }
      ];
      store.dispatch(actions.storeBefore(payload));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe("actions", () => {
    it("should create an action to store the name of the last post in the array", () => {
      const payload = "string";
      const expectedAction = [
        {
          type: types.STORE_AFTER,
          payload
        }
      ];
      store.dispatch(actions.storeAfter(payload));
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  describe("async actions", () => {
    it("should dispatch actions of ConstantA and ConstantB", () => {
      const bool = true;
      const expectedActions = [
        { type: types.IS_FETCHING, bool }
        // { type: types.POSTS_FETCHED, payload: [{ id: 1 }, { id: 2 }] }
        // // { type: CONSTANT_B, payload: "b" }
      ];

      const store = storeMock({});
      store.dispatch(actions.getPosts("subrredit"));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
