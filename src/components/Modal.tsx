import styled from 'styled-components';
import { forwardRef } from 'react';

type ModalProps = {
  message: string;
  onYesClick: () => void;
};

const Modal = forwardRef(({ message, onYesClick }: ModalProps, ref: any) => {
  return (
    <Dialog ref={ref}>
      <pre>{message}</pre>
      <Button onClick={onYesClick}>예</Button>
      <Button onClick={() => ref.current.close()}>아니오</Button>
    </Dialog>
  );
});

export default Modal;

const Dialog = styled.dialog`
  text-align: center;
  border: 1px solid #747474;
`;

const Button = styled.button`
  background-color: #efefef;
  padding: 0.5rem;
  margin: 0.4rem;
  border-radius: 0.4rem;
`;
