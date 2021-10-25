import { LinkWrapper } from './link.styles';

const Link = ({ path, name }) => {
  return (
    <LinkWrapper to={path}>
      {name}
    </LinkWrapper>
  )
}

export default Link
