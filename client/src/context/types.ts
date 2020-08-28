export enum UserType {
    addUser = "ADD_USER",
}

export interface IUserAction {
    type: UserType.addUser;
    payload: IUserContext;
}

export interface IUserContext {
    username: string;
    password: string;
    isAdmin: boolean;
}
