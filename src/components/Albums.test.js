import React from "react";
import { shallow, mount } from "enzyme";
import Albums from "./Albums";
import albumsMock from "./albumsMock.json";
import usersMock from "./usersMock.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { findByTestAtrr } from "../utils";

const setUp = (props = {}) => {
  const component = shallow(
    <Albums data_albums={albumsMock} data_users={usersMock} />
  );
  return component;
};

describe("Have props", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("Should render the props", () => {
    const component = findByTestAtrr(wrapper, "loaded");
    expect(component.length).not.toBe(0);
  });
});

describe("Mock data passed to component", () => {
  let wrapper = mount(
    <Router>
      <Albums data_albums={albumsMock} data_users={usersMock} />
    </Router>
  );
  test("Check if a title appears correctly", () => {
    expect(wrapper.contains("quidem molestiae enim")).toEqual(true);
  });
});

// Click one of albums, the page should be redirected to the photo page
describe("Click the album, check the behaviour of the page", () => {
  const MockComp = () => <div className="target">Target</div>;
  const MockDenied = () => <div className="denied"> Denied</div>;

  const wrapper = mount(
    <Router>
      <Switch>
        <React.Fragment>
          <Route exact path="/">
            <Albums data_albums={albumsMock} data_users={usersMock} />
            <MockDenied />
          </Route>
          <Route path="/pics/:topic" component={MockComp} />
        </React.Fragment>
      </Switch>
    </Router>
  );

  test("Click the album, it should redirect to photo page", () => {
    expect(wrapper.find(".denied")).toHaveLength(1);
    wrapper.find(".albumTitle").first().simulate("click", { button: 0 });
    expect(wrapper.find(".target")).toHaveLength(1);
  });
});
