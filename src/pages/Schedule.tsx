import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useSchedule from '../hooks/useSchedule';
import Class from '../components/Class';
import PageTitle from '../components/PageTitle';
import PageMoveButton from '../components/PageMoveButton';

function Schedule() {
  const { schedule, deleteLecture } = useSchedule();
  const weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saterday', 'Sunday'];

  return (
    <Container>
      <PageTitle title="Class Schedule" />
      <TimeTable>
        {Object.keys(schedule).map((day: string, index: number) => (
          <Day key={day}>
            <h3>{weekday[index]}</h3>
            <Ol>
              {schedule[day as keyof typeof schedule].map((lecture) => (
                <Class
                  key={lecture.id}
                  id={lecture.id}
                  timeRange={lecture.timeRange}
                  day={weekday[index]}
                  remove={deleteLecture}
                />
              ))}
            </Ol>
          </Day>
        ))}
      </TimeTable>
      <Link to="/add">
        <ButtonContainer>
          <PageMoveButton buttonText="Add Class Schedule" />
        </ButtonContainer>
      </Link>
    </Container>
  );
}

export default Schedule;

const Container = styled.section`
  position: relative;
  margin: 2.5rem;
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

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
