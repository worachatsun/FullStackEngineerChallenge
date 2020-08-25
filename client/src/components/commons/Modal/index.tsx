import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer, Wrapper, Overlay, Icon } from './Modal.styled';
import { FaTimes } from 'react-icons/fa';

interface Props {
  isShowing: boolean;
  children?: React.ReactChild;
  close?: () => void;
}

const Modal: FunctionComponent<Props> = React.memo(
  ({ isShowing, children, close }) => {
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
  }
);

export default Modal;
