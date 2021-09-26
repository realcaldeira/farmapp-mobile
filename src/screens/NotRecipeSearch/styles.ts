import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background_primary};
  /* justify-content: center;
  align-content: center; */
  
`;

export const Header = styled.View`
  height: 12%;
  margin: 12px;

  /* background-color: red;  */
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

export const ContainerSearch = styled.View`
  height: 10%;
  /* background-color: red; */
  flex-direction: row;
  justify-content: space-between;
  margin: 0 12px;
`;

export const InputSearch = styled.TextInput`
  width: ${RFValue(255)}px;
  height:  ${RFValue(37)}px;
  
  text-align: center;
  color: white;
  background: #525F8F;
  border-radius: 10px;
`;

export const ButtonSearch = styled.TouchableOpacity`
  width: ${RFValue(104)}px;
  height:  ${RFValue(37)}px;
  
  justify-content: center;
  align-items: center;

  background: #525F8F;
  border-radius: 10px;
  
`;

export const Title = styled.Text`
  color: white;
`;

export const ContainerAddToList = styled.View`
  height: 10%;
  
  
`;
export const TitleAddToList = styled.Text`
  text-align: right;
  margin-right: ${RFValue(35)}px;
  font-weight: bold;
`;

export const List = styled.FlatList`
  height: 100%;
  /* margin-top: 20px; */
  /* background-color: red; */
`;