import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { requestToken } from "../../store/auth/thunks";
import { requestProfile, searchItems } from "../../store/spotify/thunks";

import Spinner from "../../components/spinner";
import Container from "./containers/container";
import Content from "./components/content";
import Modal from "../../components/modal";
import SearchForm from "./containers/searchForm";
import Results from "./components/results";
import Text from "./components/text";
import List from "./components/list";
import Card from "./components/card";
import Title from "../../components/title";
import NotFound from "./components/notFound";

const Home = props => {
  const { auth, spotify, requestToken, requestProfile, searchItems } = props;

  const [term, setTerm] = useState("");
  const [lastSearch, setLastSearch] = useState([]);

  useEffect(() => {
    if (!auth.token && props.location.hash) {
      requestToken(props.location.hash);
    } else {
      requestToken(localStorage.getItem("access_token"));
    }
    if (!spotify.list || spotify.list.length === 0) {
      requestProfile();
    }
    if (localStorage.getItem("last_result")) {
      setLastSearch(JSON.parse(localStorage.getItem("last_result")));
    }
  }, []);

  const handleChange = async e => {
    await setTerm(e);
    if (e !== "") await searchItems(e);
  };

  const handleBlur = e => {
    let lastResult = spotify.list.albums.items;
    if (e !== "") {
      localStorage.setItem("last_result", JSON.stringify(lastResult));
    }
  };

  return (
    <Container>
      <Spinner show={spotify.loading} />
      {!localStorage.getItem("access_token") && <Modal />}
      <Content>
        <SearchForm
          onChange={e => handleChange(e)}
          onBlur={e => handleBlur(e)}
        />
        {term && <NotFound>Resultados encontrados para "{term}"</NotFound>}
        {spotify.list && spotify.list.albums.items.length > 0 && (
          <Results>
            <Title>Albums</Title>
            <List>
              {spotify.list &&
                spotify.list.albums.items &&
                spotify.list.albums.items.map(a => (
                  <Card
                    key={a.id}
                    title={a.name}
                    artists={a.artists}
                    images={a.images}
                    id={a.id}
                  />
                ))}
            </List>
            {spotify.list && spotify.list.artists.items.length > 0 && (
              <Title>Artistas</Title>
            )}
            <List>
              {spotify.list &&
                spotify.list.artists.items &&
                spotify.list.artists.items.map(a => (
                  <Card key={a.id} title={a.name} images={a.images} />
                )) //<Text>Nenhum artista encontrado</Text>
              }
            </List>
            {spotify.list && spotify.list.tracks.items.lenght > 0 && (
              <Title>Músicas</Title>
            )}
            <List>
              {spotify.list &&
                spotify.list.tracks.items &&
                spotify.list.tracks.items.map(a => (
                  <Card key={a.id} title={a.name} />
                ))}
            </List>
          </Results>
        )}
        {spotify.list && spotify.list.albums.items.length === 0 && (
          <Text>Nenhum resultado encontrado</Text>
        )}
        {!spotify.list && lastSearch.length > 0 && (
          <Results>
            <Text>Últimos albums pesquisados</Text>
            <List>
              {lastSearch.map(last => (
                <Card
                  key={last.id}
                  title={last.name}
                  id={last.id}
                  images={last.images}
                />
              ))}
            </List>
          </Results>
        )}
      </Content>
    </Container>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  spotify: state.spotify
});

export default connect(
  mapStateToProps,
  {
    requestToken,
    requestProfile,
    searchItems
  }
)(Home);
