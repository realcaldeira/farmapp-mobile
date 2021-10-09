import React, { useContext, useEffect, useState } from 'react';

import { Container, IconImage, Title } from './styles';

import Icon from '../../assets/icon.png'

import { CheckBox } from 'react-native-elements';
import { Alert } from 'react-native';
import { AuthContext } from '../../providers/auth';
interface Props {
  title: string;
  checked: boolean;
  // setChecked: () => void;
  value: Object;
  onPress?: () => void;
}

export function Card({ title, onPress, checked, value, ...rest }: Props) {
  const { setList, list } = useContext(AuthContext);

  const [checke, setChecke] = useState(false);
  const [item, setItem] = useState([]);

  function handleRegister() {
    setChecke(true);

    const data = {
      id: value?.idProdutoMarca,
      name: value?.descricao
    }

    setItem(oldState => [...oldState, data]);
    console.log('********************************************')

    const hasRemedy = item.some(iten => iten.id === data.id)

    if (hasRemedy) {
      Alert.alert('ESSE REMÉDIO JÁ FOI ADICIONADO')
      // console.log(list)
      return
    } else {
      console.log('ADD');
      setList(item)
      console.log(list);
      return
    }

  }

  useEffect(() => {

  }, [item])

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