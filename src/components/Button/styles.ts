import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(152)}px;
  height: ${RFValue(45)}px;
  background-color: #1C2139;

  justify-content: center;
  align-items: center;
  border-radius: 30px;

  margin: 10px 0;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: white;
`;



