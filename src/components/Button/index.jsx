import { ButtonWrapper } from './button.styles.js'

const Button = ({ children, primary}) => {
  return (
    <ButtonWrapper primary={primary}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
