import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Post from "./Post";

const timeMock = Math.round(new Date().getTime() / 1000);
const postMock = {
  author: "Author Name",
  title: "Post Title",
  permalink: "Permalink",
  thumbnail: "https://bit.ly/2tmUlty",
  url: "url",
  num_comments: 345,
  created_utc: timeMock
};
describe("Post", () => {
  it("displays data correctly", () => {
    const wrapper = shallow(<Post post={postMock} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
