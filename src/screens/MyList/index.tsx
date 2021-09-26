import React, { useContext, useEffect, useState } from 'react';

import {
  Container,
  Header,
  ContainerDrawer,
  ImagemDrawer,
  Imagem,
  ButtonSync,
  ImagemSync,
  ContainerBody,
  Title
} from './styles';

import LogoImage from '../../assets/logo.png';
import DrawerImage from '../../assets/drawer.png';
import SyncImage from '../../assets/sync.png';
import { AuthContext } from '../../providers/auth';
import axios from 'axios';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';


interface RemedyData {
  idProdutoMarca: string;
  descricao: string;
}

interface Routes {
  route: string;
  // params?: string;
}

interface ListData {
  id: string;
  name: string;
}

export function MyList({ route }: Routes) {
  const [item, setItem] = useState('');
  const [data, setData] = useState<ListData[]>([]);

  const remedios = route.params?.title;

  const navigation = useNavigation();

  const { list, setList } = useContext(AuthContext);

  function handleSync() {
    // search.filter()
  }

  function handleAddMyList() {
    setItem(remedios)
    const data = {
      id: String(new Date().getTime()),
      name: remedios
    }

    setData(oldState => [...oldState, data]);
    setList(item);
  }

  function handleDrawer() {
    navigation.openDrawer();
  }

  useEffect(() => {

    handleAddMyList();
    // console.log(list)
    console.log('data')
    console.log(remedios)
    console.log(list.length)
  }, [])

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

      <ContainerBody>


        {/* <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={(item) => (
            <Title>{list}</Title>

          )}
        /> */}
        <Title>{remedios}</Title>
      </ContainerBody>


    </Container>
  );
}


