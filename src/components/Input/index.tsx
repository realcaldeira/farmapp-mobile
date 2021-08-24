import React from 'react';

import { Container, Title, ContainerData, Data } from './styles';
import { TextInputProps } from 'react-native';

interface PropsInput extends TextInputProps{
  texto?: string;
}

export function Input({ texto, ...rest }: PropsInput){
  return(
    <Container {...rest}>
      <Title>{texto}</Title>
        <ContainerData>
         <Data {...rest} />
        </ContainerData>
    </Container>
  )
}