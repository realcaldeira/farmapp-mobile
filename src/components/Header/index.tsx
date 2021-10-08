import React, { useContext } from 'react';

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

export function Header() {
  const { list } = useContext(AuthContext);
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