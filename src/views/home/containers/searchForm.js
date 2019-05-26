import React from 'react';
import styled from 'styled-components'
import Input from '../../../components/input'
import Text from '../components/text'
import theme from '../../../components/theme'


const Filter = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media (max-width: ${theme.viewports.tablet}) {
    margin-bottom: 20px;
  }
`;

const SearchForm = (props) => {
  return (
    <Filter>
      <Text>Busque por artistas, álbuns ou músicas</Text>
      <Input type="text" placeholder="Comece a escrever..." onChange={(e) => props.onChange(e.target.value)} value={props.textSearch} onBlur={(e) => props.onBlur(e.target.value)} />
    </Filter>
  )
};

export default SearchForm

