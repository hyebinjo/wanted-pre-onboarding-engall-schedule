import { useState, useEffect } from 'react';

function Add() {
  const [hour, setHour] = useState<string>('00');
  const [minute, setMinute] = useState<string>('00');
  const [AMPM, setAMPM] = useState<string>();
  const [day, setDay] = useState<string>();
  const [selectedTimeString, setSelectedTimeString] = useState<string>();

  const setTimeString = () => {
    if (AMPM === 'am') {
      hour === '12'
        ? setSelectedTimeString(`0000-01-01 00:${minute}`)
        : setSelectedTimeString(`0000-01-01 ${hour}:${minute}`);
    } else
      hour === '12'
        ? setSelectedTimeString(`0000-01-01 ${hour}:${minute}`)
        : setSelectedTimeString(`0000-01-01 ${Number(hour) + 12}:${minute}`);
  };

  const checkValidTime = (): boolean => {
    if (!hour || !minute || !AMPM || !day) {
      alert('시간과 요일을 모두 선택하세요');
      return false;
    } else if (AMPM === 'pm' && hour === '11' && Number(minute) > 0) {
      alert('시작시간은 0시~23시 사이 입니다.');
      return false;
    } else return true;
  };

  const saveTime = (e: Event) => {
    e.preventDefault();
    if (!checkValidTime()) return;
    setTimeString();
  };

  useEffect(() => {
    console.log(selectedTimeString);
  }, [selectedTimeString]);

  return (
    <>
      <h2>Add class Schedule</h2>
      <form name="time">
        <div>
          start time
          <select name="hour" onChange={(e) => setHour(e.target.value)}>
            <option value={''}>시</option>
            <option value={'01'}>01</option>
            <option value={'02'}>02</option>
            <option value={'03'}>03</option>
            <option value={'04'}>04</option>
            <option value={'05'}>05</option>
            <option value={'06'}>06</option>
            <option value={'07'}>07</option>
            <option value={'08'}>08</option>
            <option value={'09'}>09</option>
            <option value={'10'}>10</option>
            <option value={'11'}>11</option>
            <option value={'12'}>12</option>
          </select>
          {` : `}
          <select name="minute" onChange={(e) => setMinute(e.target.value)}>
            <option value="">분</option>
            <option value={'00'}>00</option>
            <option value={'05'}>05</option>
            <option value={'10'}>10</option>
            <option value={'15'}>15</option>
            <option value={'20'}>20</option>
            <option value={'25'}>25</option>
            <option value={'30'}>30</option>
            <option value={'35'}>35</option>
            <option value={'40'}>40</option>
            <option value={'45'}>45</option>
            <option value={'50'}>50</option>
            <option value={'55'}>55</option>
          </select>
          <div onChange={(e) => setAMPM(e.target.value)}>
            <input type="radio" name="time" value="am" />
            <label htmlFor="am">AM</label>
            <input type="radio" name="time" value="pm" />
            <label htmlFor="pm">PM</label>
          </div>
        </div>
        <div onChange={(e) => setDay(e.target.value)}>
          Repeat on
          <input type="radio" name="weekday" value="mon" />
          <label htmlFor="mon">Monday</label>
          <input type="radio" name="weekday" value="tue" />
          <label htmlFor="tue">Tuesday</label>
          <input type="radio" name="weekday" value="wed" />
          <label htmlFor="wed">Wednesday</label>
          <input type="radio" name="weekday" value="thu" />
          <label htmlFor="thu">Thursday</label>
          <input type="radio" name="weekday" value="fri" />
          <label htmlFor="fri">Friday</label>
          <input type="radio" name="weekday" value="sat" />
          <label htmlFor="sat">Saturday</label>
          <input type="radio" name="weekday" value="sun" />
          <label htmlFor="sun">Sunday</label>
        </div>
        <button onClick={(e) => saveTime(e)}>Save</button>
      </form>
    </>
  );
}

export default Add;
