import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStartEndTimeObj } from '../utils/getTimeFormat';
import { TimeRange } from '../interfaces/types';
import Class from '../components/Class';
import styled from 'styled-components';

type schedule = {
  mon: Array<TimeRange>;
  tue: Array<TimeRange>;
  wed: Array<TimeRange>;
  thu: Array<TimeRange>;
  fri: Array<TimeRange>;
  sat: Array<TimeRange>;
  sun: Array<TimeRange>;
};

const data = {
  mon: [
    { id: 1, time: '0000-01-01 13:00' },
    { id: 2, time: '0000-01-01 18:30' },
  ],
  tue: [],
  wed: [
    { id: 1, time: '0000-01-01 10:10' },
    { id: 2, time: '0000-01-01 18:30' },
  ],
  thu: [
    { id: 1, time: '0000-01-01 10:10' },
    { id: 2, time: '0000-01-01 18:30' },
    { id: 3, time: '0000-01-01 21:40' },
  ],
  fri: [
    { id: 1, time: '0000-01-01 10:10' },
    { id: 2, time: '0000-01-01 18:30' },
  ],
  sat: [],
  sun: [{ id: 1, time: '0000-01-01 10:10' }],
};

function Schedule() {
  const [jsonData] = useState(data);
  const [scheduleData, setScheduleData] = useState<schedule>({
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: [],
  });
  const weekday = ['Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saterday', 'Sunday'];

  useEffect(() => {
    let initialData: schedule = { mon: [], tue: [], wed: [], thu: [], fri: [], sat: [], sun: [] };
    for (const key in jsonData) {
      initialData[key as keyof typeof jsonData] = jsonData[key as keyof typeof jsonData].map((lecture) => {
        const startTimeObj = new Date(lecture.time);
        return getStartEndTimeObj(startTimeObj);
      });
    }
    setScheduleData(initialData);
  }, []);

  return (
    <Container>
      <H2>
        Class Schedule
        <Link to="/add">
          <Button>Add Class Schedule</Button>
        </Link>
      </H2>
      <TimeTable>
        {Object.keys(scheduleData).map((key: string, index: number) => (
          <Day key={key}>
            <h3>{weekday[index]}</h3>
            <Ol>
              {scheduleData[key].map((time: TimeRange) => (
                <Class key={time.start} time={time} />
              ))}
            </Ol>
          </Day>
        ))}
      </TimeTable>
    </Container>
  );
}

export default Schedule;

const Container = styled.section`
  margin: 2.5rem;
`;

const H2 = styled.h2`
  position: relative;
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
`;

const TimeTable = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  padding: 1rem 1.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const Day = styled.div`
  width: 8rem;
  margin-right: 1rem;
  text-align: center;
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const Ol = styled.ol`
  margin-top: 1rem;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.6em 1.2em;
  background-color: #3175d8;
  color: #ffffff;
  font-size: 1rem;
  border-radius: 0.5rem;
`;
