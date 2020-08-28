import React from "react";
import renderer from "react-test-renderer";
import Layout from "./Layout";

describe("<Layout />", () => {
    test("should render correctly", () => {
        const render = renderer.create(<Layout />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
