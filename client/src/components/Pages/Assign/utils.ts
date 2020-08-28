import { IListModel } from "../../../interfaces/model";

interface IOption {
    value: string;
    label: string;
}

export const filterOptions = (users: IListModel[] = [], reviewed: string[], username: string): IOption[] => {
    const options: IOption[] = [];
    users.map((user: IListModel) => {
        if (!reviewed?.includes(user.username) && username !== user.username)
            options.push({ value: user.username, label: user.username });
    });
    return options;
};
