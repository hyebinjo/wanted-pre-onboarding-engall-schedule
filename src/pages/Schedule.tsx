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
  const weekday = ['Monday', 'Tuesday', 'wednsday', 'Thursday', 'Friday', 'Saterday', 'Sunday'];

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
    <>
      <h2>Class Schedule</h2>
      <TimeTable>
        {Object.keys(scheduleData).map((key: string, index: number) => (
          <Day key={key}>
            {weekday[index]}
            <Ol>
              {scheduleData[key].map((time: TimeRange) => (
                <Class key={time.start} time={time} />
              ))}
            </Ol>
          </Day>
        ))}
      </TimeTable>
      <Link to="/add">
        <Button>Add Class Schedule</Button>
      </Link>
    </>
  );
}

export default Schedule;

const TimeTable = styled.div`
  display: flex;
`;

const Day = styled.div`
  width: 10rem;
  margin-right: 1rem;
`;

const Ol = styled.ol`
  margin-top: 1rem;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
`;
