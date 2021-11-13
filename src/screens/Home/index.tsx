import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/auth';

import {
  Container,
  Title,
  ContainerSearch,
  InputSearch,
  ButtonSearch,
  ContainerOptions,
  ButtonOptions,
  TitleOptions
} from './styles';


export function Home() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const { token, list } = useContext(AuthContext);

  function handleSearch() {
    // Alert.alert(search);

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get(
      `https://farmappapi.herokuapp.com/api/Produto?IdTipoProduto=2&Busca=${search}`,
      config
    ).then((json) =>
      json.status === 200
        ?
        // console.log(json.data[0])
        setData(json.data[0])
        : '')
      .catch(console.log);
  }
  return (
    <Container>
      <ContainerSearch>
        <InputSearch
          placeholder="Busca por produto"
          placeholderTextColor='white'
          onChangeText={setSearch}
        />
        <ButtonSearch
          onPress={handleSearch}
        >
          <Title>Pesquisar</Title>
        </ButtonSearch>
      </ContainerSearch>

      <ContainerOptions>
        <ButtonOptions>
          <TitleOptions>distância</TitleOptions>
        </ButtonOptions>

        <ButtonOptions>
          <TitleOptions>preço</TitleOptions>
        </ButtonOptions>
      </ContainerOptions>
    </Container>
  )
}