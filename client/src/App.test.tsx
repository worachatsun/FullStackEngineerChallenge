import React from "react";
import App from "./App";
import renderer from "react-test-renderer";

describe("<App />", () => {
    test("should render correctly", () => {
        const render = renderer.create(<App />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
