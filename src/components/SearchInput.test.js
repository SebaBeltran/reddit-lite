import React from "react";
import { shallow } from "enzyme";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  it("should call handleChange prop with value", () => {
    const handleInputMock = jest.fn();
    const event = {
      preventDefault() {},
      target: { value: "someValue" }
    };
    const wrapper = shallow(
      <SearchInput value="someValue" handleInput={handleInputMock} />
    );
    wrapper.find("input").simulate("change", event);
    expect(handleInputMock).toBeCalledWith("someValue");
  });
});
