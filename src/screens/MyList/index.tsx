import React, { useContext, useEffect, useState } from 'react';

import {
  Container,
  ContainerBody,
  Title
} from './styles';

import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Header } from '../../components/Header';


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
  }

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {

    handleAddMyList();
    // console.log(list)
    console.log('data')
    console.log(remedios)
  }, [])

  return (
    <Container>
      <Header />

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


