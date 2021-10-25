import styled from 'styled-components';

export const LatestProductsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const LatestProductsTitle = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 5rem;
`;
export const CarouselImagesWrapper = styled.div`
  width: 990px;
  display: flex;
  justify-content: space-between;
`

export const CarouselImage = styled.img`
  width: 300px;
  display: inline-block;
  transition: transform .5s ease;

  &:hover{
    transform: scale(1.1);
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`
