import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OurMissionWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;
export const OurMissionTitle = styled.h1`
  text-align: center;
  color: #2f068e;
  margin-bottom: 5rem;
`;
export const UL = styled.ul`
margin-bottom: 3rem;
`;
export const LI = styled.li`
  text-align: left;
  color: #3d217f;
  font-weight: 200;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
export const LinkWrapper = styled(Link)`
  text-align: center;
  color: #77c130;
  text-transform: uppercase;
  font-weight: 200;
`;

export const VideoWrapper = styled.div`
margin: 5rem 0;
`;
