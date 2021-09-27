import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
  height: 12%;
  margin: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerDrawer = styled.TouchableOpacity`
`;

export const ImagemDrawer = styled.Image`
  width: ${RFValue(25)}px;
  height: ${RFValue(25)}px;
  
  
`;

export const Imagem = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(40)}px;
  
  /* margin-left: ${RFValue(50)}px; */
`;

export const ImagemSync = styled.Image`
  width: ${RFValue(45)}px;
  height: ${RFValue(45)}px;
  
  /* margin-left: ${RFValue(50)}px; */
`;

export const ButtonSync = styled.TouchableOpacity`
  
`;