import React from "react";
import renderer from "react-test-renderer";
import Landing from "./index";

describe("<Landing />", () => {
    test("should render correctly", () => {
        const render = renderer.create(<Landing />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
