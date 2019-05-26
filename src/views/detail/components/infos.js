import React from 'react'
import styled from 'styled-components'
import theme from '../../../components/theme'

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  flex-basis: 30%;
  
  @media (max-width: ${theme.viewports.tablet}) {
    flex-basis: 100%;
    margin-bottom: 30px;
  }
`;

const AlbumImage = styled.img`
  width: 100%;
  height: auto;
`;

const AlbumTitle = styled.h1`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  margin: 5px 0;
`;

const AlbumArtist = styled.h2`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.title};
  font-weight: 300;
`;



const InfoAlbum = (props) => (
  <InfoContent>
    <AlbumImage src={props.images ? props.images[0].url : 'https://imagens.canaltech.com.br/empresas/698.400.jpg'} alt={props.name} />
    <AlbumTitle>{props.name}</AlbumTitle>
    {
      props.artists &&
        props.artists.map((a)=>
          <AlbumArtist key={a.id}>{a.name}</AlbumArtist>
        )
    }
  </InfoContent>
);

export default InfoAlbum