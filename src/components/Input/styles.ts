import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 width: 100%;
 /* background-color: red; */
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;

  margin-bottom: ${RFValue(2)}px;
`;

export const ContainerData = styled.View`
  
  justify-content: center;
  align-items: center;
`;

export const Data = styled.TextInput`
  
  width: 100%;
  height: ${RFValue(45)}px;
  background-color: white;
  border-radius: 5px;

  padding-left: ${RFValue(10)}px;
  
`;