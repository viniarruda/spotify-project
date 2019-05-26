import styled from 'styled-components'
import theme from '../../../components/theme'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  min-width: 1000px;
  
  @media (max-width: ${theme.viewports.tablet}) {
    min-width: initial;
  }
`;

export default Content