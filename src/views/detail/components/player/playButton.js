import React from 'react'
import styled from 'styled-components'
import theme from '../../../../components/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconPlay = styled(FontAwesomeIcon)`
  font-size: ${theme.fontSizes.title};
  color: ${theme.colors.primary};
  cursor: pointer;
`;

const PlayButton = (props) => (
  <IconPlay icon="play-circle" onClick={() => props.onClick()}/>
);

export default PlayButton;