import React from 'react'
import styled from 'styled-components'
import theme from './theme'
import api from '../utils/services'

const BackDrop = styled.div`
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.67);
`;

const Background = styled.div`
  background: ${theme.colors.secondary};
  border-radius: 5px;
  width: 150px;
  height: 150px;
  margin: 40vh auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.title};
`;

const Message = styled.span`
  margin: 10px 0;
`;

const Modal = (props) => {

  return (
    <BackDrop>
      <Background>
        <Message>Token expirado!</Message>
        <a href={api.server + '/login'}>Gerar novo token!</a>
      </Background>
    </BackDrop>
  )
}

export default Modal