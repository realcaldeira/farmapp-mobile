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
import { Alert } from 'react-native';

export function Header() {
  const { list, token } = useContext(AuthContext);
  const navigation = useNavigation();

  var decoded = jwt_decode(token);



  async function handleSync() {
    const numbers = list.map((number) => number.id)
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const bodyParameters = {
      IdCliente: parseInt(decoded.IdCliente),
      IdsProdutoMarca: numbers
    };

    console.log(bodyParameters)

    axios.post(
      'https://farmappapi.herokuapp.com/api/ItemCliente/Add',
      bodyParameters,
      config
    ).then((json) =>
      json.status === 200
        ?
        Alert.alert('DADOS SALVOS COM SUCESSO')
        : '')
      .catch(console.log);
  }

  function handleDrawer() {
    navigation.openDrawer();
  }

  useEffect(() => {

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