import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 40%;
  
  margin: ${RFValue(-15)}px;
  justify-content: center;
  align-items: center;
  
    
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;

  margin: ${RFValue(5)}px;
`;

export const Data = styled.TextInput`
  
  width: 90%;
  height: 35%;
  background-color: white;
  border-radius: 5px;

  padding-left: ${RFValue(10)}px;
`;