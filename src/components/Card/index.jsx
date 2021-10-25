import { CardWrapper, CardTitle, CardBody, CardDescription } from './card.styles';

const Card = ({ image, title, description }) => {
  return (
    <CardWrapper>
      <img src={image} alt={image} />
      <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      </CardBody>
    </CardWrapper>
  )
}

export default Card
