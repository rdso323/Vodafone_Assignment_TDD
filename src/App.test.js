import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("App component snapshot testing", () => {
  // Snapshot Testing for App component
  test("Matches the snapshot", () => {
    const component = mount(<App />);
    expect(component.getElements()).toMatchSnapshot();
  });

  test("App component is displayed", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(App)).toHaveLength(1);
  });
});
