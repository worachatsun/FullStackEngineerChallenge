import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import { UserMockup } from "../../../interfaces/model";
import Button from "../../commons/Button";
import Modal from "../../commons/Modal";
import Assign from "./index";

describe("<Assign />", () => {
    test("should render correctly", () => {
        const render = renderer.create(<Assign username={"test"} users={[UserMockup]} token={"token"} />).toJSON();
        expect(render).toMatchSnapshot();
    });

    test("should appear Modal and Button", () => {
        const wrapper = shallow(<Assign username={"test"} users={[UserMockup]} token={"token"} />);
        expect(wrapper.find(Button)).toHaveLength(2);
        expect(wrapper.find(Modal)).toHaveLength(1);
    });
});
