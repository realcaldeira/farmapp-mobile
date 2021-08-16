import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Imagem = styled.Image`
 
  width: ${RFValue(150)}px;
  height: ${RFValue(40)}px;

  margin-bottom: ${RFValue(155)}px;
`;

export const Form = styled.View`
  width: 90%;
  height: 40%;
  background-color:#92A1E8;

  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;


