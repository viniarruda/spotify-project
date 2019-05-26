import styled from 'styled-components'
import theme from '../../../../components/theme'

const Container = styled.div`
  width: 100%;
  height: 60px
  display: flex;
  flex-flow: row-wrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.1);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  @media (max-width: ${theme.viewports.tablet}) {
    background: ${theme.colors.background};
  }
`;

export default Container;