import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

describe("<App />", () => {
    test("should render correctly", () => {
        const render = renderer.create(<App />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
