import { UserType } from "./types";

export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case UserType.addUser:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
