import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 width: 100%;
 margin-bottom: ${RFValue(10)}px;
 margin-top: ${RFValue(2)}px;
 
`;

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  color: red;
  margin-top: 2px;
`;