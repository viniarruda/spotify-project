import React from 'react'
import ReactPlayer from 'react-player'
import Container from '../components/player/playerContainer'
import PlayButton from '../components/player/playButton'

const Player = (props) => {
  const { music, onClick, onChange, play, volume } = props;
  return (
    <Container>
      {
        console.log('music', music)
      }
      <PlayButton onClick={onClick} />
      <input type="range" step="any" min="0" max="1" onChange={(e) => onChange(e.target.value)}  value={volume} />
      <ReactPlayer url={music.preview_url} playing={play} volume={volume} width="100px" height="50px" />
    </Container>
  )
};

export default Player;