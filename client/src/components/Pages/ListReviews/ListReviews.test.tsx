import React from "react";
import renderer from "react-test-renderer";
import ListReviews from "./index";

describe("<ListReviews />", () => {
    test("should render correctly", () => {
        const render = renderer.create(<ListReviews />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
