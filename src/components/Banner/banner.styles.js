import styled from 'styled-components';
import BannerImage from '../../assets/banner.jpeg'

export const BannerWrapper = styled.div`
  background-image: url(${BannerImage});
  background-repeat: no-repeat, repeat;
  background-position: 100%;
  opacity: 0.4;
  height: 100%;
  object-fit: contain;
`;
