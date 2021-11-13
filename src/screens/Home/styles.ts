import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background_primary};

`;

export const Title = styled.Text`
  color: white;
`;

export const ContainerSearch = styled.View`
  height: 10%;
  padding-top: ${RFValue(30)}px;
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

export const ContainerOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(10)}px ${RFValue(50)}px;
`;
export const ButtonOptions = styled.TouchableOpacity`
  background-color: red;
  align-items: center;
  width: ${RFValue(125)}px;
  height: ${RFValue(20)}px;
`;
export const TitleOptions = styled.Text`
  color: black;
`;