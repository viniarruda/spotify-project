import styled from 'styled-components'
import theme from './theme'

const Input = styled.input`
  border-bottom: 1px solid ${theme.colors.title};
  box-sizing: border-box;
  width: ${props => props.width ? props.width : '100%'};
  font-size: 48px;
  color: ${theme.colors.title};
  font-weight: bold;
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 10px;
  letter-spacing: -1px;
  &:focus {
    outline: none;
  }
  @media (max-width: ${theme.viewports.tablet}) {
    font-size: 16px;
  }
`;

export default Input