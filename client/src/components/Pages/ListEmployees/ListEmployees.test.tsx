import React from "react";
import renderer from "react-test-renderer";
import ListEmployees from "./index";

describe("<ListEmployees />", () => {
    test("should render correctly", () => {
        const render = renderer.create(<ListEmployees />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
