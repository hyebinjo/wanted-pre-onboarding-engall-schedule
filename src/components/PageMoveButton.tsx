import styled from 'styled-components';
import { memo } from 'react';

type ButtonProps = {
  buttonText: string;
};

function PageMoveButton({ buttonText }: ButtonProps) {
  return <Button>{buttonText}</Button>;
}

export default memo(PageMoveButton);

const Button = styled.button`
  padding: 0.6em 1.2em;
  min-width: 200px;
  background-color: #3175d8;
  color: #ffffff;
  font-size: 1rem;
  border-radius: 0.5rem;
`;
