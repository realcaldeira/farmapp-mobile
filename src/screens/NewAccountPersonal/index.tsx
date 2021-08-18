import React from 'react';

import { Container, Header, Imagem, Prev, PrevTitle } from './styles';
import Logo from '../../assets/logo.png';

export function NewAccountPersonal(){
  return(
    <Container>
      <Header>
        <Prev>
          <PrevTitle>Voltar</PrevTitle>
        </Prev>

        <Imagem source={Logo}/>
      </Header>

    </Container>
  )
}