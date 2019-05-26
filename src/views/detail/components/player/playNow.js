import styled from 'styled-components'
import theme from '../../../../components/theme'

const PlayNow = styled.div`
  flex: 1;
  padding-left: 15px;
  color: ${theme.colors.title};
  font-weight: 300;
  font-size: ${theme.fontSizes.small};
  animation: shake 0.92s cubic-bezier(.36,.07,.19,.97) both infinite;
  @media (max-width: ${theme.viewports.tablet}) {
    flex-basis: 100%;
  }
  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, -1px, -2px);
    }
    
    20%, 80% {
      transform: translate3d(0, 0, 4px);
    }
  
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
  
    40%, 60% {
      transform: translate3d(0, 0, 6px);
    }
  }
`;

export default PlayNow