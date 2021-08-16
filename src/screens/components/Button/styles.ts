import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 50%;
  height: 15%;
  background-color: #1C2139;

  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: white;
`;



