import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer, Wrapper } from './Modal.styled';

interface Props {
  isShowing: boolean;
  children?: React.ReactChild;
}

const Modal: FunctionComponent<Props> = React.memo(
  ({ isShowing, children }) => {
    return isShowing
      ? ReactDOM.createPortal(
          <>
            <Wrapper>
              <ModalContainer>{children}</ModalContainer>
            </Wrapper>
          </>,
          document.body
        )
      : null;
  }
);

export default Modal;
