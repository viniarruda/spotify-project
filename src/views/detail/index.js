import React, {
  useEffect, useState
} from 'react'
import useAlbum from '../../state/spotify/hooks/useAlbum'
import useTrack from '../../state/spotify/hooks/useTrack'

import Container from './containers/container'
import Content from './components/content'
import BackButton from './components/back'
import DetailAlbum from './components/detail'
import InfoAlbum from './components/infos'
import MusicsList from './components/musicsList'
import MusicsItem from './components/musicsItem'
import Player from './containers/player'

import Spinner from '../../components/spinner'

const Detail = (props) => {
  const [spotify, isLoading, setAlbum] = useAlbum();
  const [track, loading, setMusic] = useTrack();
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [playing, setPlaying] = useState('');
  const [actualMusic, setActualMusic] = useState('');

  useEffect(() => {
    setAlbum(props.match.params.artist);
  }, []);

  const handlePlayMusic = (trackSelected) => {
    if(!track.music || track.music.length === 0) {
      setMusic(trackSelected.id);
    }
    setPlay(true);
    setPlaying(trackSelected.preview_url);
    setActualMusic(trackSelected.name);
  };

  const handleMusic = () => {
    setPlay(!play);
  };

  const handleChangeVolume = (e) => {
    setVolume(Number(e));
  };

  return (
    <Container>
      <Spinner show={isLoading || loading} />
      <Content>
        <BackButton link='/home'>Voltar</BackButton>
        {
          spotify.album &&
            <DetailAlbum>
              <InfoAlbum {...spotify.album} />
              <MusicsList>
              {
                spotify.tracks && spotify.tracks.items.map((track) =>
                  <MusicsItem key={track.id} {...track} onClick={() => handlePlayMusic(track)}/>
                )
              }
              </MusicsList>
            </DetailAlbum>
          }
        {
          track.music && <Player music={track.music} actual={actualMusic} playing={playing} play={play} volume={volume} onClick={() => handleMusic()} onChange={(e) => handleChangeVolume(e) }/>
        }
      </Content>
    </Container>
  )
};

export default Detail