import { IListModel } from "../ListEmployees";

interface IOption {
    value: string;
    label: string;
}

export const filterOptions = (users: IListModel[], reviewed: string[]) => {
    const options: IOption[] = [];
    users?.map((user: IListModel) => {
        if (!reviewed?.includes(user.username)) options.push({ value: user.username, label: user.username });
    });
    return options;
};
