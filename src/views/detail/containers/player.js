import React from 'react'
import ReactPlayer from 'react-player'
import Container from '../components/player/playerContainer'
import PlayButton from '../components/player/playButton'
import PlayerRange from '../components/player/playerRange'
import PlayNow from '../components/player/playNow'

const Player = (props) => {
  const { onClick, onChange, play, volume, playing, actual } = props;
  return (
    <Container>
      <PlayNow>Tocando: {actual}</PlayNow>
      <PlayButton onClick={onClick} play={play} />
      <PlayerRange onChange={(e) => onChange(e)} volume={volume} />
      <ReactPlayer url={playing} playing={play} volume={volume} width="0px" height="0px" />
    </Container>
  )
};

export default Player;