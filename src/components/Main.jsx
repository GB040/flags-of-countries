import styled from 'styled-components';
import { Container } from './Container';

const Wraper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
`;

export const Main = ({ children }) => {
  return (
    <Wraper>
      <Container>{children}</Container>
    </Wraper>    
  )
}