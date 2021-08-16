import React from 'react';

import { Container, Title, Data } from './styles';

export function Input({ texto }){
  return(
    <Container>
    <Title>{texto}</Title>
    <Data />
  </Container>
  )
}