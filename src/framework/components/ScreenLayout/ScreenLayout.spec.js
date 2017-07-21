import React from "react";
import ScreenLayout from "./ScreenLayout";
import {mount} from "enzyme";
import {Route, StaticRouter} from "react-router-dom";

describe("ScreenLayout component", () => {

  class Mock extends React.Component {
    render() {
      return <div>Mock</div>
    }
  }

  describe("When rendering with child components", () => {
    let renderedScreen;

    beforeEach(() => {
      renderedScreen = mount(<StaticRouter context={{}}><ScreenLayout><Mock path="/"/><Mock/></ScreenLayout></StaticRouter>);
    })

    test("It places children with a defined 'path' prop inside a Route element", () => {
      expect(renderedScreen.find(Route).find(Mock).length).toBe(1);
    });

    test("Only creates routes for components with a 'path' prop", () => {
      expect(renderedScreen.find(Route).length).toBe(1);
    });

    test("Components with and without a 'path' prop are still rendered at some point", () => {
      expect(renderedScreen.find(Mock).length).toBe(2);
    });
  });
})