import styled from 'styled-components';
import { scheduleService } from '../api/axiosInstance';
import { TimeRange } from '../interfaces/types';
import Modal from './Modal';
import { useRef } from 'react';

type ClassProps = {
  id: number;
  timeRange: TimeRange;
  day: string;
  remove: (id: number) => void;
};

function Class({ id, timeRange, day, remove }: ClassProps) {
  const modalRef = useRef();

  const deleteLecture = async () => {
    await scheduleService.delete(id);
    remove(id);
  };

  const modalMessage = `
  다음 스케쥴을 삭제하시겠습니까?
  ${day} ${timeRange.start}-${timeRange.end}
  `;

  return (
    <>
      <Li>
        {timeRange.start} - <br /> {timeRange.end}
        <CloseButton onClick={() => modalRef.current.showModal()}>×</CloseButton>
      </Li>
      <Modal message={modalMessage} onYesClick={deleteLecture} ref={modalRef} />
    </>
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
