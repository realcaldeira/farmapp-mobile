import React from 'react';

import { Container, IconImage, Title } from './styles';

import Icon from '../../assets/icon.png'

import { CheckBox } from 'react-native-elements';

export function Card() {
  return (
    <Container>
      <IconImage source={Icon} />

      <Title>Remedio X</Title>

      <CheckBox
        checkedIcon="check"
        checkedColor="green"
        // uncheckedIcon='circle-o'
        uncheckedColor='black'
        containerStyle={{
          backgroundColor: 'transparent',
          borderColor: 'transparent',

        }}
      // checked={}

      // onPress={()=> setLocation(!location)}
      />


    </Container>
  );
}