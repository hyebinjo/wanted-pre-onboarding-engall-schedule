import { useState, useEffect } from 'react';
import { getStartEndTimeObj } from '../utils/getTimeFormat';
import { TimeRange } from '../interfaces/types';

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
    <div>
      <div>
        Monday
        <ol>
          {scheduleData.mon.map((time) => (
            <li key={time.start}>
              {time.start} ~ {time.end}
            </li>
          ))}
        </ol>
      </div>
      <div>
        Tuesday
        <ol>
          {scheduleData.tue.map((time) => (
            <li key={time.start}>
              {time.start} ~ {time.end}
            </li>
          ))}
        </ol>
      </div>
      <div>
        wednsday
        <ol>
          {scheduleData.wed.map((time) => (
            <li key={time.start}>
              {time.start} ~ {time.end}
            </li>
          ))}
        </ol>
      </div>
      <div>
        Thursday
        <ol>
          {scheduleData.thu.map((time) => (
            <li key={time.start}>
              {time.start} ~ {time.end}
            </li>
          ))}
        </ol>
      </div>
      <div>
        Friday
        <ol>
          {scheduleData.fri.map((time) => (
            <li key={time.start}>
              {time.start} ~ {time.end}
            </li>
          ))}
        </ol>
      </div>
      <div>
        Saturday
        <ol>
          {scheduleData.sat.map((time) => (
            <li key={time.start}>
              {time.start} ~ {time.end}
            </li>
          ))}
        </ol>
      </div>
      <div>
        Sunday
        <ol>
          {scheduleData.sun.map((time) => (
            <li key={time.start}>
              {time.start} ~ {time.end}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Schedule;
