import styled from 'styled-components';
import { TimeRange } from '../interfaces/types';

function Class({ time }: TimeRange) {
  return (
    <Li>
      {time.start} - <br /> {time.end}
      <CloseButton>×</CloseButton>
    </Li>
  );
}

export default Class;

const Li = styled.li`
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  height: 4em;
  padding: 0.5em;
  background-color: #efefef;
  color: #747474;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  text-align: start;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  padding: 0;
  border-radius: 50%;
  background-color: #b4b4b4;
  color: #ffffff;
  font-size: 1rem;
`;
