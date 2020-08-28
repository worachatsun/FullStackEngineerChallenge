import React from "react";
import renderer from "react-test-renderer";
import ListPerformance from "./index";

describe("<ListPerformance />", () => {
    test("should render correctly", () => {
        const render = renderer.create(<ListPerformance />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
