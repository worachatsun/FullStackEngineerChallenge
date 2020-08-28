import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import { Icon, ModalContainer, Overlay, Wrapper } from "./Modal.styled";

interface IProps {
    isShowing: boolean;
    children?: React.ReactChild;
    close?: () => void;
}

const Modal: FunctionComponent<IProps> = React.memo(({ isShowing, children, close }) => {
    return isShowing
        ? ReactDOM.createPortal(
              <>
                  <Overlay />
                  <Wrapper>
                      <ModalContainer>
                          <Icon>
                              <FaTimes onClick={close} />
                          </Icon>
                          {children}
                      </ModalContainer>
                  </Wrapper>
              </>,
              document.body
          )
        : null;
});

export default Modal;
