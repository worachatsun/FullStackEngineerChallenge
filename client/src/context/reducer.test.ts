import { reducer } from "./reducer";
import { UserType, IUserContext } from "./types";

describe("UserContext reducer", () => {
    test("should handle UserType.addUser correctly", () => {
        const state: IUserContext = {
            username: "",
            password: "",
            isAdmin: false,
        };

        const initUserContext: IUserContext = {
            username: "test",
            password: "test",
            isAdmin: false,
        };

        const result = reducer(state, {
            type: UserType.addUser,
            payload: initUserContext,
        });

        expect(result).toStrictEqual(initUserContext);
    });
});
