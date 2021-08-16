import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  
  
  justify-content: center;
  align-items: center;
  
  
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
`;

export const Data = styled.TextInput`
  
  width: 90%;
  height: 30%;
  background-color: white;
  border-radius: 5px;
`;