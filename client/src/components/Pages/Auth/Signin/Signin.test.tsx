import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Input from "../../../commons/Input";
import Signin from "./index";

describe("<Signin />", () => {
    test("should render correctly", () => {
        const render = renderer.create(<Signin />).toJSON();
        expect(render).toMatchSnapshot();
    });

    test("should appear Input", () => {
        const wrapper = shallow(<Signin />);
        expect(wrapper.find(Input)).toHaveLength(2);
    });
});
