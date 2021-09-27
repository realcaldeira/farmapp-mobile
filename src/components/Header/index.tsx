import React from 'react';

import {
  Container,
  ContainerDrawer,
  Imagem,
  ButtonSync,
} from './styles';

import { Feather, Ionicons } from '@expo/vector-icons';

import LogoImage from '../../assets/logo.png';

import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

export function Header() {

  const navigation = useNavigation();

  function handleSync() {
    // search.filter()
  }

  function handleDrawer() {
    navigation.openDrawer();
  }

  return (
    <Container>
      <ContainerDrawer
        onPress={handleDrawer}
      >
        <Feather
          name="menu"
          size={RFValue(32)}
          color="#000"
        />
      </ContainerDrawer>
      <Imagem source={LogoImage} />
      <ButtonSync
        onPress={handleSync}
      >
        <Ionicons
          name="sync-circle-sharp"
          size={RFValue(40)}
          color="#000"
        />
      </ButtonSync>
    </Container>
  )
}