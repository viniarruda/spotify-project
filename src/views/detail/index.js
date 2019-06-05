import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { requestAlbum, requestTrack } from "../../store/spotify/thunks";

import Container from "./containers/container";
import Content from "./components/content";
import BackButton from "./components/back";
import DetailAlbum from "./components/detail";
import InfoAlbum from "./components/infos";
import MusicsList from "./components/musicsList";
import MusicsItem from "./components/musicsItem";
import Player from "./containers/player";

import Spinner from "../../components/spinner";

const Detail = props => {
  const { spotify, requestAlbum, requestTrack } = props;

  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [playing, setPlaying] = useState("");
  const [actualMusic, setActualMusic] = useState("");

  useEffect(() => {
    requestAlbum(props.match.params.artist);
  }, []);

  const handlePlayMusic = trackSelected => {
    if (!spotify.music || spotify.music.length === 0) {
      requestTrack(trackSelected.id);
    }
    setPlay(true);
    setPlaying(trackSelected.preview_url);
    setActualMusic(trackSelected.name);
  };

  const handleMusic = () => {
    setPlay(!play);
  };

  const handleChangeVolume = e => {
    setVolume(Number(e));
  };

  return (
    <Container>
      <Spinner show={spotify.loading} />
      <Content>
        <BackButton link="/home">Voltar</BackButton>
        {spotify.album && (
          <DetailAlbum>
            <InfoAlbum {...spotify.album} />
            <MusicsList>
              {spotify.tracks &&
                spotify.tracks.items.map(track => (
                  <MusicsItem
                    key={track.id}
                    {...track}
                    onClick={() => handlePlayMusic(track)}
                  />
                ))}
            </MusicsList>
          </DetailAlbum>
        )}
        {spotify.music && (
          <Player
            music={spotify.music}
            actual={actualMusic}
            playing={playing}
            play={play}
            volume={volume}
            onClick={() => handleMusic()}
            onChange={e => handleChangeVolume(e)}
          />
        )}
      </Content>
    </Container>
  );
};

const mapStateToProps = state => ({
  spotify: state.spotify
});

export default connect(
  mapStateToProps,
  {
    requestAlbum,
    requestTrack
  }
)(Detail);
