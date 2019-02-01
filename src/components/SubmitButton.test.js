import React from "react";
import SubmitButton from "./SubmitButton";
import { shallow } from "enzyme";

describe("SubmitButton", () => {
  it("should call onClick when clicked", () => {
    const submitMock = jest.fn();

    const wrapper = shallow(<SubmitButton handleSubmit={submitMock} />);
    wrapper.find("button").simulate("click");
    expect(submitMock).toHaveReturned();
  });
});
