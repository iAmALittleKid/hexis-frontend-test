import React from "react";
import { User } from "./User";
import { shallow } from "enzyme";

describe("User Unit Tests", () => {
  it("renders without crashing", () => {
    shallow(<User />);
  });
});
