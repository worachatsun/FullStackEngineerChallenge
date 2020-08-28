import React, { FunctionComponent, useState } from "react";
import Select from "react-select";
import useSWR from "swr";
import { REVIEW_API, REVIEW_USERS_API } from "../../../constants/routes";
import { IListModel } from "../../../interfaces/model";
import Button from "../../commons/Button";
import Modal from "../../commons/Modal";
import { fetcher, HttpMethod, mutator } from "../../commons/utils/client";
import useModal from "../../Hook/useModal";
import { ButtonContainer, Container, Lable, Tag, TagContainer } from "./Assign.styled";
import { filterOptions } from "./utils";
interface IProps {
    username: string;
    users: IListModel[];
    token: string;
}

interface IOption {
    value: string;
    label: string;
}

const Assign: FunctionComponent<IProps> = ({ username, users, token }) => {
    const { isShowing, toggle, close } = useModal();
    const [option, setOption] = useState();
    const [assignUsers, setAssignUsers] = useState<IOption[]>();
    const { data: reviewed = [], mutate } = useSWR<string[]>(
        [REVIEW_USERS_API, token, `reviewTo=${username}`],
        fetcher
    );

    const handleChange = (selectedOption: any) => {
        setOption(selectedOption);
    };

    const onSubmit = async () => {
        try {
            const { response } = await mutator(REVIEW_API, HttpMethod.POST, token, {
                users: option,
                assignee: username,
            });
            if (!response?.ok) throw new Error(`${response?.status}: ${response?.statusText}`);
            const data = await response?.json();
            mutate(reviewed);
            setAssignUsers(filterOptions(users, reviewed, username));
            close();
            if (data.error) throw new Error(`Unable to add user`);
        } catch (error) {
            console.error(error);
        }
    };

    const onClickAssign = () => {
        toggle();
        mutate(reviewed);
        setAssignUsers(filterOptions(users, reviewed, username));
    };

    return reviewed ? (
        <>
            <Button onClick={onClickAssign}>Assign</Button>
            <Modal isShowing={isShowing} close={close}>
                <Container>
                    <Lable>Assign to: {username}</Lable>
                    <Select options={assignUsers} isMulti={true} onChange={handleChange} />
                    <TagContainer>
                        {reviewed.map((user, index: number) => (
                            <Tag key={index}>{user}</Tag>
                        ))}
                    </TagContainer>
                    <ButtonContainer>
                        <Button onClick={onSubmit}>Assign</Button>
                    </ButtonContainer>
                </Container>
            </Modal>
        </>
    ) : (
        <div />
    );
};

export default Assign;
