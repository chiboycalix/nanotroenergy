import styled from 'styled-components';

export const CardWrapper = styled.div`
  color: white;
  width: 33.5%;
  text-align: center;
  padding: 5rem 0;

  &:nth-child(1) {
    background-color: #17014c;
  }
  &:nth-child(2) {
    background-color: #1e147a;
  }
  &:nth-child(3) {
    background-color: #30299c;
  }
`;

export const CardBody = styled.div`
  width: 90%;
  margin: 2rem auto;
  background-color: transparent;
`;
export const CardTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;
export const CardDescription = styled.p`
  font-weight: 200;
  line-height: 25px;
  font-size: 1rem
`;
