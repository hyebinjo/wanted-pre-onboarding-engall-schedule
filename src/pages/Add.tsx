import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useSchedule from '../hooks/useSchedule';

function Add() {
  const { schedule } = useSchedule();
  const [hour, setHour] = useState<string>('00');
  const [minute, setMinute] = useState<string>('00');
  const [AMPM, setAMPM] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [selectedTimeString, setSelectedTimeString] = useState<string>('');
  const navigate = useNavigate();

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

  const handleSaveClick = (e: Event) => {
    e.preventDefault();
    if (!checkValidTime()) return;
    setTimeString();
  };

  const checkPossibleTime = (day: string): boolean => {
    const startOfValidRange = new Date(selectedTimeString);
    startOfValidRange.setMinutes(startOfValidRange.getMinutes() - 40);
    const endOfValidRange = new Date(selectedTimeString);
    endOfValidRange.setMinutes(endOfValidRange.getMinutes() + 40);
    for (let i = 0; i < schedule[day as keyof typeof schedule].length; i++) {
      const classStart = new Date(schedule[day as keyof typeof schedule][i].startTime);
      if (classStart > startOfValidRange && classStart < endOfValidRange) {
        alert('기존 수업시간을 확인하세요.');
        setSelectedTimeString('');
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    selectedTimeString && checkPossibleTime(day) && navigate('/');
  }, [selectedTimeString]);

  return (
    <Container>
      <H2>Add class Schedule</H2>
      <Form name="time">
        <Section>
          <h3>start time</h3>
          <TimeSelect name="hour" onChange={(e) => setHour(e.target.value)}>
            <option value={'00'}>00</option>
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
          </TimeSelect>
          {` : `}
          <TimeSelect name="minute" onChange={(e) => setMinute(e.target.value)}>
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
          </TimeSelect>
          <RadioContainer onChange={(e) => setAMPM(e.target.value)}>
            <RadioInput type="radio" id="am" name="time" value="am" />
            <RadioLabel htmlFor="am">AM</RadioLabel>
            <RadioInput type="radio" id="pm" name="time" value="pm" />
            <RadioLabel htmlFor="pm">PM</RadioLabel>
          </RadioContainer>
        </Section>
        <Section onChange={(e) => setDay(e.target.value)}>
          <h3>Repeat on</h3>
          <CheckboxInput type="checkbox" id="mon" name="weekday" value="mon" />
          <CheckboxLabel htmlFor="mon">Monday</CheckboxLabel>
          <CheckboxInput type="checkbox" id="tue" name="weekday" value="tue" />
          <CheckboxLabel htmlFor="tue">Tuesday</CheckboxLabel>
          <CheckboxInput type="checkbox" id="wed" name="weekday" value="wed" />
          <CheckboxLabel htmlFor="wed">Wednesday</CheckboxLabel>
          <CheckboxInput type="checkbox" id="thu" name="weekday" value="thu" />
          <CheckboxLabel htmlFor="thu">Thursday</CheckboxLabel>
          <CheckboxInput type="checkbox" id="fri" name="weekday" value="fri" />
          <CheckboxLabel htmlFor="fri">Friday</CheckboxLabel>
          <CheckboxInput type="checkbox" id="sat" name="weekday" value="sat" />
          <CheckboxLabel htmlFor="sat">Saturday</CheckboxLabel>
          <CheckboxInput type="checkbox" id="sun" name="weekday" value="sun" />
          <CheckboxLabel htmlFor="sun">Sunday</CheckboxLabel>
        </Section>
      </Form>
      <Button onClick={(e) => handleSaveClick(e)}>Save</Button>
    </Container>
  );
}

export default Add;

const Container = styled.section`
  margin: 2.5rem;
  position: relative;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
`;

const Form = styled.form`
  padding: 2rem 1.5rem;
  margin-bottom: 1rem;
  background-color: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  padding: 0.6em 5em;
  background-color: #3175d8;
  color: #ffffff;
  font-size: 1rem;
  border-radius: 0.5rem;
`;

const Section = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 3rem;
  h3 {
    margin-right: 1rem;
    font-weight: 400;
  }
`;

const TimeSelect = styled.select`
  width: 2.5rem;
  height: 1.8rem;
  margin: 0 0.2rem;
  border: 1px solid #d1d1d1;
  appearance: none;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const RadioContainer = styled.div`
  margin-left: 1rem;
`;

const RadioInput = styled.input`
  display: none;
  :checked + label {
    background: gray;
    color: #fff;
  }
`;

const RadioLabel = styled.label`
  display: inline-block;
  width: 2.5rem;
  height: 1.8rem;
  margin: 0 0.25rem;
  border: 1px solid #d1d1d1;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  display: none;
  :checked + label {
    border: 1px solid #d1d1d1;
    color: #000000;
  }
`;

const CheckboxLabel = styled.label`
  display: inline-block;
  width: 8rem;
  height: 2rem;
  margin: 0 0.25rem;
  border: 1px solid #f4f4f4;
  color: #d1d1d1;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`;
