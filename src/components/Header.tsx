import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <HeaderBar>
      <Link to="">
        <H1>engall</H1>
      </Link>
    </HeaderBar>
  );
}

export default Header;

const HeaderBar = styled.h1`
  display: flex;
  align-items: center;
  height: 4rem;
  width: 100vw;
  background-color: #44a7c8;
  padding: 0 1rem;
`;

const H1 = styled.h1`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;
