import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../../../components/theme'

const Back = styled(Link)`
  text-decoration: none;
  margin: 15px 0;
  color: ${theme.colors.secondary};
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  font-size: 14px;
`;

const BackButton = (props) => (
  <Back to={props.link}>
    <Icon icon="chevron-left" />
    Voltar
  </Back>
);

export default BackButton