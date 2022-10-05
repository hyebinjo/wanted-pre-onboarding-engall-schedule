import styled from 'styled-components';
import { memo } from 'react';

type PageTitleProps = {
  title: string;
};

function PageTitle({ title }: PageTitleProps) {
  return <H2>{title}</H2>;
}

export default memo(PageTitle);

const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
`;
