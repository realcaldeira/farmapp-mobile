import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonsProps {
  color?: string;
}

// export const Container =  styled(RectButton)<ButtonsProps>`
export const Container =  styled.TouchableOpacity<ButtonsProps>`
  width: ${RFValue(152)}px;
  height: ${RFValue(45)}px;
  background-color: ${({ color })=> color};

  justify-content: center;
  align-items: center;
  border-radius: 20px;

  margin: 10px 0;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: white;
`;



