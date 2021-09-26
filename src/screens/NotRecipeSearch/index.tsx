import React, { useContext, useEffect, useState } from 'react';

import {
  Container,
  Header,
  ContainerDrawer,
  ImagemDrawer,
  Imagem,
  ButtonSync,
  ImagemSync,
  ContainerSearch,
  InputSearch,
  ButtonSearch,
  Title,
  ContainerAddToList,
  TitleAddToList,
  List
} from './styles';

import LogoImage from '../../assets/logo.png';
import DrawerImage from '../../assets/drawer.png';
import SyncImage from '../../assets/sync.png';
import { Card } from '../../components/Card';
import { AuthContext } from '../../providers/auth';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

interface RemedyData {
  idProdutoMarca: string;
  descricao: string;
}


export function NotRecipeSearch() {
  const [search, setSearch] = useState('');
  const [remedy, setRemedy] = useState<RemedyData[]>([]);
  const [myList, setMyList] = useState<RemedyData[]>([]);
  const [checked, setChecked] = useState(false);

  const navigation = useNavigation();

  const { token } = useContext(AuthContext);

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
        // console.log(json.data)
        setRemedy(json.data[0].descricao)
        : '')
      .catch(console.log);
  }

  function handleSync() {
    // search.filter()
  }

  function handleRegister(data: string) {
    setChecked(true)
    console.log('data')
  }

  function handleDrawer() {
    navigation.openDrawer();
  }

  useEffect(() => {
    console.log(checked)
  }, [checked])
  return (
    <Container>
      <Header>
        <ContainerDrawer
          onPress={handleDrawer}
        >
          <ImagemDrawer source={DrawerImage} />
        </ContainerDrawer>
        <Imagem source={LogoImage} />
        <ButtonSync
          onPress={handleSync}
        >
          <ImagemSync source={SyncImage} />
        </ButtonSync>
      </Header>

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


      {remedy.length > 0 &&
        <List
          data={[remedy]}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <Card
              title={String(item)}
              checked={!checked}
              onPress={() => handleRegister(item)}
            // onPress={() => setChecked(!checked)}
            />
          )}
        />
      }

    </Container>
  );
}


