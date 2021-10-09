import React, { useContext, useEffect, useState } from 'react';

import {
  Container,
  ContainerSearch,
  InputSearch,
  ButtonSearch,
  Title,
  ContainerAddToList,
  TitleAddToList,
  List
} from './styles';

import { Card } from '../../components/Card';
import { AuthContext } from '../../providers/auth';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';

interface RemedyData {
  idProdutoMarca: string;
  descricao: string;
}


export function NotRecipeSearch() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<RemedyData[]>([]);
  const [checked, setChecked] = useState(false);

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

  function handleRegister(data: string) {
    setChecked(true)
    console.log('data')
  }


  useEffect(() => {
    console.log('list')
    console.log(list)
    console.log(data.descricao)
  }, [checked, data])
  return (
    <Container>
      <Header />

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
      <ContainerAddToList>
        <TitleAddToList>Adicionar a{'\n'} minha lista</TitleAddToList>

      </ContainerAddToList>


      {data.descricao &&
        <List
          data={[data]}
          keyExtractor={item => String(item.idProdutoMarca)}
          renderItem={({ item }) => (
            <Card
              title={item.descricao}
              checked={!checked}
              onPress={() => handleRegister(item)}
              value={item}
            // onPress={() => setChecked(!checked)}
            />
          )}
        />
      }

    </Container>
  );
}


