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

export const Form = styled.View`
  width: ${RFValue(359)}px;
  height: ${RFValue(285)}px;
  background-color:#92A1E8;

  border-radius: 10px;

  justify-content: center;
  align-items: center;
  padding: ${RFValue(30)}px;
`;

export const Password = styled.TouchableOpacity`

`;

export const PasswordTitle = styled.Text`
  font-size: ${RFValue(14)}px;
 
`;

export const CreateAnAccount = styled.TouchableOpacity`
  padding-top: ${RFValue(20)}px;
`;
export const CreateAnAccountTitle = styled.Text`
  font-size: ${RFValue(18)}px;

  font-weight: bold;
`;

