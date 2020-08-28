import React from "react";
import renderer from "react-test-renderer";
import Question from "./index";
import { IPerformanceModel } from "../../../interfaces/model";

describe("<Question />", () => {
    const review = {
        id: 1,
        reviewTo: "sun",
        reviewBy: "sun",
        isReview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        answers: [],
    };
    test("should render correctly", () => {
        const render = renderer.create(<Question review={review as IPerformanceModel} close={jest.fn} />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
