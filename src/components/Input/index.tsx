import React from 'react';

import { Container, Title, Data } from './styles';
import { TextInputProps } from 'react-native';

interface PropsInput extends TextInputProps{
  texto: string;
}

export function Input({ texto, ...rest }: PropsInput){
  return(
    <Container >
    <Title>{texto}</Title>
    <Data {...rest} />
  </Container>
  )
}