import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background_primary};
  /* justify-content: center;
  align-content: center; */
  
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