import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Text } from 'react-native-elements';
import { AuthContext } from '../../providers/auth';

import {
  Container,
  Title,
  ContainerSearch,
  InputSearch,
  ButtonSearch,
  ContainerOptions,
  ButtonOptions,
  TitleOptions,
  List,
  Card,
  ContainerTitle,
  MedicamentoTitle,
  FarmaciaTitle,
  Preço,
  Km
} from './styles';


export function Home() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [type, setType] = useState(false);
  const [loading, setLoading] = useState(false);

  const { token, list } = useContext(AuthContext);

  function handleSearch() {
    setType(false)
    setLoading(true)
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get(
      `https://farmappapi.herokuapp.com/api/Produto/PesquisaProdutoPorPrecoOuDistancia?Busca=${search}&TipoOrdenacao=1&IdContaPessoal=24`,
      config
    ).then((json) =>
      json.status === 200
        ?
        // console.log(json.data[0])
        setData(json.data)
        : '')
      .catch(console.log);
    setLoading(false)

  }

  function handlePrice() {
    setType(true)
    setLoading(true)
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get(
      `https://farmappapi.herokuapp.com/api/Produto/PesquisaProdutoPorPrecoOuDistancia?Busca=${search}&TipoOrdenacao=0&IdContaPessoal=24`,
      config
    ).then((json) =>
      json.status === 200
        ?
        // console.log(json.data[0])
        setData(json.data)
        : '')
      .catch(console.log);
    setLoading(false)
  }

  useEffect(() => {
    Alert.alert('Pesquise o produto desejado e ordene de acordo com a distância ou preço')
  }, [])

  return (

    <Container>
      <ContainerSearch>
        <InputSearch
          placeholder="Busca por produto"
          placeholderTextColor='white'
          onChangeText={setSearch}
        />
        {search.length > 0 &&
          <ButtonSearch
            onPress={handleSearch}
          >

            <Title>Pesquisar</Title>
          </ButtonSearch>
        }
      </ContainerSearch>


      {data.length > 0 &&
        <ContainerOptions>
          <ButtonOptions
            onPress={handleSearch}
            isActive={type === false}
          >
            <TitleOptions>distância</TitleOptions>
          </ButtonOptions>

          <ButtonOptions
            onPress={handlePrice}
            isActive={type === true}
          >
            <TitleOptions>preço</TitleOptions>
          </ButtonOptions>
        </ContainerOptions>
      }

      {search.length > 0 &&
        <List
          data={data}
          keyExtractor={item => String(item.nomeFarmacia)}
          renderItem={({ item }) => (
            <Card>
              <MedicamentoTitle> {item.descricao}</MedicamentoTitle>
              <FarmaciaTitle> {item.nomeFarmacia}</FarmaciaTitle>

              <Preço> R$ {item.preco.toFixed(2)}</Preço>
              <Km>{item.distancia}</Km>
            </Card>
          )}
        />
      }
    </Container>
  )
}