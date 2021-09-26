import React, { useContext, useState } from 'react';

import { Container, IconImage, Title } from './styles';

import Icon from '../../assets/icon.png'

import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import { AuthContext } from '../../providers/auth';
interface Props {
  title: string;
  checked: boolean;
  // setChecked: () => void;
  onPress?: () => void;
}

export function Card({ title, onPress, checked, ...rest }: Props) {

  const [checke, setChecke] = useState(false);

  const navigation = useNavigation();
  const { setList } = useContext(AuthContext);

  function handleRegister() {
    setChecke(true);
    setList(title)
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