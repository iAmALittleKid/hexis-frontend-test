import React from "react";
import { Search } from "./Search";
import { shallow } from "enzyme";

describe("Search renders", () => {
  it("renders without crashing", () => {
    shallow(<Search />);
  });
});

describe("Displays correctly", () => {
  it("displays search users correctly", () => {
    const search = shallow(<Search />);
    const h2 = search.find("h2").at(0).text();
    expect(h2).toEqual("Search Users");
  });
  it("displays username input", () => {
    const search = shallow(<Search />);
    const input = search.find("input#username_input");
    expect(input.props()).toHaveProperty("placeholder", "GitHub Username");
  });
});

describe("input usernames correctly", () => {
  it("inputs username correctly", () => {
    const wrapper = shallow(<Search />);
    wrapper
      .find("input#username_input")
      .simulate("change", { target: { value: "Mahkii900" } });
    expect(wrapper.state("username")).toEqual("Mahkii900");
  });
});
