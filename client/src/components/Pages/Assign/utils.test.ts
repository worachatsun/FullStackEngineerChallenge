import React from "react";
import { filterOptions } from "./utils";

describe("Filter users as option ", () => {
    const mockReviews = [
        {
            createdAt: new Date(),
            id: 3,
            isAdmin: false,
            updatedAt: new Date(),
            username: "root1",
        },
        {
            createdAt: new Date(),
            id: 4,
            isAdmin: false,
            updatedAt: new Date(),
            username: "root12",
        },
        {
            createdAt: new Date(),
            id: 5,
            isAdmin: false,
            updatedAt: new Date(),
            username: "root123",
        },
        {
            createdAt: new Date(),
            id: 2,
            isAdmin: false,
            updatedAt: new Date(),
            username: "sun",
        },
    ];
    test("should return users that is not an owner and users that already reviewed", () => {
        const options = filterOptions(mockReviews, ["sun"], "root123");
        expect(options.length).toEqual(2);
    });
    test("should return empty array when it is an owner", () => {
        const options = filterOptions(mockReviews.slice(2, 4), ["sun"], "root123");
        expect(options.length).toEqual(0);
    });
});
