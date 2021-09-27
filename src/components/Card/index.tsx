import React, { useContext, useState } from 'react';

import { Container, IconImage, Title } from './styles';

import Icon from '../../assets/icon.png'

import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
interface Props {
  title: string;
  checked: boolean;
  // setChecked: () => void;
  onPress?: () => void;
}

export function Card({ title, onPress, checked, ...rest }: Props) {

  const [checke, setChecke] = useState(false);

  const navigation = useNavigation();

  function handleRegister() {
    setChecke(true);
    navigation.navigate('MyList', { title })
  }

  return (
    <Container {...rest}
      onPress={handleRegister}
    >
      <IconImage source={Icon} />

      <Title>{title}</Title>

      <CheckBox
        checkedIcon="check"
        checkedColor="green"
        uncheckedColor='black'
        containerStyle={{
          backgroundColor: 'transparent',
          borderColor: 'transparent',

        }}
        checked={checke}
        {...rest}
        onPress={handleRegister}
      />


    </Container>
  );
}