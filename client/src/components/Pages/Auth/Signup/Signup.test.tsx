import React from "react";
import renderer from "react-test-renderer";
import Signup from "./index";

describe("<Signup />", () => {
    test("should render correctly", () => {
        const render = renderer.create(<Signup />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
