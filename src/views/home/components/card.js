import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../../components/theme'


const CardContainer = styled(Link)`
  margin: 30px 10px;
  padding: 15px;
  flex: 1;
  flex-basis: 15%;
  height: auto;
  max-width: 15%;
  text-decoration: none;
  
  @media (max-width: ${theme.viewports.tablet}) {
    flex-basis: 100%;
    max-width: 100%;
    margin: 10px;
  }
`;

const CardContent = styled.div`
  background: url(${props => props.background}) no-repeat;
  background-size: cover;
  background-position: 50%;
  border-radius: 3px;
  width: 100%;
  height: 250px;
  -webkit-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-duration: .3s;
  transition-duration: .3s;
  -webkit-transition-timing-function: cubic-bezier(.3,0,.4,1);
  transition-timing-function: cubic-bezier(.3,0,.4,1);
  cursor: pointer;
`;

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

const CardDescriptionName = styled.h2`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  text-align: center;
  margin: 10px 0;
`;

const CardDescriptionArtist = styled.h3`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.title};
  text-align: center;
  font-weight: 300;
`;

const Card = (props) => (
  <CardContainer to={'/albums/' + props.id}>
    <CardContent background={props.images && props.images.length > 0 ? props.images[1].url : 'https://imagens.canaltech.com.br/empresas/698.400.jpg'} />
    <CardDescription>
      <CardDescriptionName>{props.title}</CardDescriptionName>
      { props.artists && props.artists.map((a, key) =>
        <CardDescriptionArtist key={key}>{a.name}</CardDescriptionArtist>)
      }
    </CardDescription>
  </CardContainer>
);


export default Card