import React, { useContext, useEffect, useState } from 'react';

import {
  Container,
  ContainerBody,
  Title
} from './styles';

import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Header } from '../../components/Header';
import axios from 'axios';
import { AuthContext } from '../../providers/auth';
import jwt_decode from "jwt-decode";
import { ScrollView } from 'react-native-gesture-handler';


interface RemedyData {
  id: string;
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
  const [item, setItem] = useState([]);
  const [data, setData] = useState<RemedyData[]>([]);

  const { token, list } = useContext(AuthContext);
  var decoded = jwt_decode(token);

  function handleSync() {
    // search.filter()
  }

  function handleAddMyList() {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get(
      `https://farmappapi.herokuapp.com/api/ItemCliente/GetAll?idCliente=${decoded.IdCliente}`,
      config
    ).then((json) =>
      json.status === 200
        ?
        // console.log(json.data)
        setData(json.data)
        : '')
      .catch(console.log);
  }

  useEffect(() => {
    handleAddMyList();
    console.log(data)
    console.log(data.descricao)

  }, [])

  return (
    <Container>
      <Header />

      <ContainerBody>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <>
              <Title>{String(item.descricao)}</Title>
            </>
          )}
        />
        {/* <Title>REMEDIOS</Title> */}
      </ContainerBody>
    </Container>
  );
}