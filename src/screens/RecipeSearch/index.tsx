import React from 'react';

import {
  Container,
  Header,
  ImagemDrawer,
  Imagem,
  ImagemSync,
  ContainerSearch,
  InputSearch,
  ButtonSearch,
  Title,
  ContainerAddToList,
  TitleAddToList
} from './styles';

import LogoImage from '../../assets/logo.png';
import DrawerImage from '../../assets/drawer.png';
import SyncImage from '../../assets/sync.png';


export function RecipeSearch() {
  return (
    <Container>
      <Header>
        <ImagemDrawer source={DrawerImage} />
        <Imagem source={LogoImage} />
        <ImagemSync source={SyncImage} />
      </Header>

      <ContainerSearch>
        <InputSearch placeholder="Buscar por produto" placeholderTextColor='white' />
        <ButtonSearch
          onPress={() => {

          }}
        >
          <Title>Pesquisar</Title>
        </ButtonSearch>
      </ContainerSearch>
      <ContainerAddToList>
        <TitleAddToList>Adicionar a{'\n'} minha lista</TitleAddToList>

      </ContainerAddToList>

    </Container>
  );
}


