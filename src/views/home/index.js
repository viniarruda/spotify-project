import React, {
  useEffect, useState
} from 'react'
import useProfile from '../../state/spotify/hooks/useProfile'
import useSearch from '../../state/spotify/hooks/useSearch'
import useToken from '../../state/auth/hooks/useToken'

import Spinner from '../../components/spinner'
import Container from './containers/container'
import Content from './components/content'
import Modal from '../../components/modal'
import SearchForm from './containers/searchForm'
import Results from './components/results'
import Text from './components/text'
import List from './components/list'
import Card from './components/card'
import Title from '../../components/title'
import NotFound from './components/notFound'

const Home = (props) => {
  const [spotify, isLoading, setListProfile] = useProfile();
  const [search, loading, setSearch] = useSearch();
  const [auth, setToken] = useToken();
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (!auth.token && props.location.hash) {
      setToken(props.location.hash);
    } else {
      setToken(localStorage.getItem('access_token'));
    }
    if (!spotify.list || spotify.list.length === 0) {
      setListProfile();
    }
  }, []);

  const handleChange = async (e) => {
    await setTerm(e);
    if (e !== '') await setSearch(e);
  };

  return ( 
    <Container>
      <Spinner show = {isLoading || loading} />
      {
        !localStorage.getItem('access_token') && <Modal />
      }
      <Content>
        <SearchForm onChange={(e) => handleChange(e)} />
        {
          term && <NotFound>Resultados encontrados para "{term}"</NotFound>
        }
        {
          search.list && search.list.albums.items.length > 0 &&
          <Results>
            {
              search.list && search.list.albums.items && <Title>Albums</Title>
            }
            <List>
              {
                search.list &&
                search.list.albums.items && search.list.albums.items.map(a =>
                  <Card key={a.id} title={a.name} artists={a.artists} images={a.images} id={a.id}/>
                )
              }
            </List>
            {
              search.list && search.list.artists.items && <Title>Artistas</Title>
            }
            <List>
              {
                search.list &&
                search.list.artists.items && search.list.artists.items.map(a =>
                  <Card key={a.id} title={a.name} images={a.images} id={a.id}/>
                )  //<Text>Nenhum artista encontrado</Text>
              }
            </List>
            {
              search.list && search.list.tracks.items && <Title>Músicas</Title>
            }
            <List>
              {
                search.list &&
                search.list.tracks.items && search.list.tracks.items.map(a =>
                  <Card key={a.id} title={a.name} id={a.id}/>
                )
              }
            </List>
          </Results>
        }
        {
          search.list && search.list.albums.items.length === 0 && <Text>Nenhum resultado encontrado</Text>
        }
      </Content>
    </Container>
  )
};

export default Home