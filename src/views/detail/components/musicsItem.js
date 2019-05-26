import React from 'react'
import styled from 'styled-components'
import theme from '../../../components/theme'

const MusicItemContent = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 15px;
  margin: 0 0 20px 0;
  cursor: pointer;
`;

const MusicItemDescription = styled.span`
  font-size: ${theme.fontSizes.medium};
  font-weight: 300;
  color: ${theme.colors.secondary};
  flex: 1;
  @media (max-width: ${theme.viewports.tablet}) {
    flex-basis: 80%;
    line-height: 1.3;
  }
`;

const MusicItemNumber = styled.span`
  font-weight: 300;
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.title};
  margin-right: 15px;
`;

const MusicItemDuration = styled.span`
  flex: 1;
  text-align: right;
  font-weight: 300;
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.secondary};
`;

const MusicItem = (props) => {

  const transformSec = (value) => {
    return value / 60000
  };

  return (
    <MusicItemContent onClick={() => props.onClick(props.id)}>
      <MusicItemDescription>
        <MusicItemNumber>{props.track_number + '.'}</MusicItemNumber>
        {props.name}
        </MusicItemDescription>
      <MusicItemDuration>{transformSec(props.duration_ms).toFixed((2))}</MusicItemDuration>
    </MusicItemContent>
  )
}



export default MusicItem