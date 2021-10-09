import React, { useContext, useEffect } from 'react';

import {
  Container,
  ContainerDrawer,
  Imagem,
  ButtonSync,
} from './styles';

import { Feather, Ionicons } from '@expo/vector-icons';

import LogoImage from '../../assets/LogoSvg.svg';

import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AuthContext } from '../../providers/auth';

import jwt_decode from "jwt-decode";
import axios from 'axios';

export function Header() {
  const { list, token } = useContext(AuthContext);
  const navigation = useNavigation();

  var decoded = jwt_decode(token);

  async function handleSync() {

    // var convertList = list.split(',').map(Number);

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const bodyParameters = {
      IdCliente: parseInt(decoded.IdCliente),
      IdsProdutoMarca: 0
    };

    axios.post(
      'https://farmappapi.herokuapp.com/api/ItemCliente/Add',
      bodyParameters,
      config
    ).then((json) =>
      json.status === 200
        ?
        console.log('DADOS SALVOS COM SUCESSO')
        : '')
      .catch(console.log);
  }

  function handleDrawer() {
    navigation.openDrawer();
  }

  useEffect(() => {
    console.log(list.length)
    console.log(decoded.IdCliente)
  }, [])

  return (
    <Container>
      <ContainerDrawer
        onPress={handleDrawer}
      >
        <Feather
          name="menu"
          size={RFValue(32)}
          color="#1C2139"
        />
      </ContainerDrawer>
      <LogoImage width={RFValue(120)} height={RFValue(100)} fill="#1C2139" />
      <ButtonSync
        onPress={handleSync}
      >
        <Ionicons
          name="sync-circle-sharp"
          size={RFValue(40)}
          color="#1C2139"
        />
      </ButtonSync>
    </Container>
  )
}