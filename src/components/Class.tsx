import styled from 'styled-components';
import { TimeRange } from '../interfaces/types';

function Class({ time }: TimeRange) {
  return (
    <Li>
      {time.start} - <br /> {time.end}
      <CloseButton>x</CloseButton>
    </Li>
  );
}

export default Class;

const Li = styled.li`
  margin-bottom: 1rem;
  position: relative;
  width: 8em;
  height: 4em;
  padding: 0.5em;
  background-color: lightgray;
  border-radius: 0.5rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  border-radius: 50%;
`;
