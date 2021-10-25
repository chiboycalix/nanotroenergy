import { useState } from 'react';
import {
  LatestProductsWrapper, LatestProductsTitle,
  CarouselImagesWrapper, CarouselImage,
  ButtonWrapper
} from './latestProducts.styles';
import ImgOne from '../../assets/8059.jpeg';
import ImgTwo from '../../assets/8069.jpeg';
import ImgThree from '../../assets/8076.jpeg';
import ImgFour from '../../assets/8076.png';
import ImgFive from '../../assets/8081.jpeg';
import ImgSix from '../../assets/8092.png';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Button } from '../../components';

const LatestProducts = () => {
  const [value, setValue] = useState(0);
  const [slides] = useState([
    (<CarouselImagesWrapper>
      <CarouselImage src={ImgOne} alt="" />
      <CarouselImage src={ImgTwo} alt="" />
      <CarouselImage src={ImgThree} alt="" />
    </CarouselImagesWrapper>),
    (<CarouselImagesWrapper>
      <CarouselImage src={ImgFour} alt="" />
      <CarouselImage src={ImgFive} alt="" />
      <CarouselImage src={ImgSix} alt="" />
    </CarouselImagesWrapper>)
  ]);
  
  onchange = (value) => {
    setValue(value);
  }
  return (
    <LatestProductsWrapper>
      <LatestProductsTitle>Our Latest Products</LatestProductsTitle>
      <Carousel
        slides={slides}
        value={value}
        onChange={onchange}
        plugins={[
          'arrows',
          'clickToChange'
        ]}
      />
      <Dots number={slides.length} value={value} onChange={onchange} />
      <ButtonWrapper>

      <Button primary>Go to all PRODUCTS Page</Button>
      </ButtonWrapper>
    </LatestProductsWrapper>
  )
}

export default LatestProducts;
