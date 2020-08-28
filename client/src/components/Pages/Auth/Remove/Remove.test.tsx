import React from "react";
import renderer from "react-test-renderer";
import Remove from "./index";

describe("<Remove />", () => {
    test("should render correctly", () => {
        const render = renderer.create(<Remove username={"test"} mutate={jest.fn} />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
