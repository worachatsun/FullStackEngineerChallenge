import React, { FunctionComponent } from "react";
import { FaUserTie } from "react-icons/fa";
import useSWR from "swr";
import { LIST_EMPLOYEES_API } from "../../../constants/routes";
import Button from "../../commons/Button";
import Modal from "../../commons/Modal";
import { fetcher } from "../../commons/utils/client";
import useModal from "../../Hook/useModal";
import Layout from "../../Layout";
import Assign from "../Assign";
import Remove from "../Auth/Remove";
import Signup from "../Auth/Signup";
import { ButtonContainer, Hr, Lable, ListHeader, Table, Th, ThText, Tr } from "./ListEmployees.styled";

export interface IListModel {
    id: number;
    username: string;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const ListEmployees: FunctionComponent = () => {
    const { isShowing, toggle, close } = useModal();
    const token = localStorage.getItem("token") || "";
    const { data, mutate } = useSWR<IListModel[]>([LIST_EMPLOYEES_API, token], fetcher);

    return data ? (
        <Layout>
            <ListHeader>
                <Lable>List Employees</Lable>
                <Button onClick={toggle}>Add Employee</Button>
            </ListHeader>
            <Table>
                <Th>
                    <FaUserTie size={"1.5em"} color="#ff0033" />
                    <ThText>Name</ThText>
                </Th>
                {data.map((user: IListModel, index: number) => (
                    <div key={index}>
                        <Hr />
                        <Tr>
                            <div>{user.username}</div>
                            <ButtonContainer>
                                <Assign username={user.username} users={data} token={token} />
                                <Remove username={user.username} mutate={mutate} />
                            </ButtonContainer>
                        </Tr>
                    </div>
                ))}
                <Hr />
            </Table>
            <Modal isShowing={isShowing} close={close}>
                <Signup />
            </Modal>
        </Layout>
    ) : (
        <div></div>
    );
};

export default ListEmployees;
