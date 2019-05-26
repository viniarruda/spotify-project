import styled from 'styled-components'
import theme from '../../../../components/theme'

const PlayNow = styled.div`
  flex: 1;
  padding-left: 15px;
  color: ${theme.colors.title};
  font-weight: 300;
  font-size: ${theme.fontSizes.small};
  @media (max-width: ${theme.viewports.tablet}) {
    flex-basis: 10 0%;
  }
`;

export default PlayNow