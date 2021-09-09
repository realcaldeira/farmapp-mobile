import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import theme from '../../styles/theme';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  onPress: () => void;
}

export function Button({title, color, onPress, ...rest}: Props){
  return(
    <Container 
      color={color ? color : theme.colors.background_others}
      onPress={onPress}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  )
}