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

export const ContainerContent = styled.View`
  width: ${RFValue(359)}px;
  height: ${RFValue(225)}px;
  background-color:#92A1E8;

  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(35)}px;
  margin-top: ${RFValue(35)}px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;

`;

export const DivButton = styled.View`
  margin: ${RFValue(10)}px;
`;
