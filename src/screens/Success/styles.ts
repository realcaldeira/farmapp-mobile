import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
  width: 100%;
  height: 100%;
 
  justify-content: center;
  align-items: center;

  background-color: #CFE0ED;

`;

export const Imagem = styled.Image`
 
  width: ${RFValue(150)}px;
  height: ${RFValue(40)}px;

  margin-bottom: ${RFValue(135)}px;
`;

export const ContainerSuccess = styled.View`
  width: ${RFValue(300)}px;
  height: ${RFValue(400)}px;
  background-color :#FFF;

  border-radius: 10px;

  justify-content: center;
  align-items: center;
  padding: ${RFValue(30)}px;
`;

export const Title = styled.Text`
  text-align: center;

  font-size: ${RFValue(18)}px;

  margin-bottom: 20px;
`;
