import React from "react";
import renderer from "react-test-renderer";
import Signin from "./index";

describe("<Signin />", () => {
    test("should render correctly", () => {
        const render = renderer.create(<Signin />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
