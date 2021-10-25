import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  cursor: pointer;
  font-family: inherit;
  padding: 15px 30px;
  border: none;
  outline: none;
  background: ${(props) => (props.primary ? '#1F73BC' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
`;
