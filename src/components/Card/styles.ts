import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 60%;
  
  margin: 0 25px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

export const IconImage = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  
`;
