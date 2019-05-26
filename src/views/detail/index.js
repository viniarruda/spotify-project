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

  useEffect(() => {
    console.log(props);
    if (!spotify.album || spotify.album.length === 0) {
      setAlbum(props.match.params.artist);
    }
  }, []);

  const handlePlayMusic = (track_id) => {
    if(!track.music || track.music.length === 0) {
      setMusic(track_id);
    }
    setPlay(!play);
  };

  const handleMusic = () => {
    console.log('oi')
    setPlay(!play);
  };

  const handleChangeVolume = (e) => {
    setVolume(e);
  };

  return (
    <Container>
      <Spinner show={isLoading || loading} />
      <Content>
        {
          console.log(spotify)
        }
        <BackButton link='/home'>Voltar</BackButton>
        {
          spotify.album &&
            <DetailAlbum>
              <InfoAlbum {...spotify.album} />
              <MusicsList>
              {
                spotify.tracks && spotify.tracks.items.map((track) =>
                  <MusicsItem key={track.id} {...track} onClick={() => handlePlayMusic(track.id)}/>
                )
              }
              </MusicsList>
            </DetailAlbum>
          }
        {
          track.music && <Player music={track.music} play={play} volume={volume} onClick={() => handleMusic()} onChange={(e) => handleChangeVolume(e) }/>
        }
      </Content>
    </Container>
  )
};

export default Detail