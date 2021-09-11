import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme })=> theme.colors.background_primary};

  justify-content: center;
  align-items: center;
`;



export const ContainerContentTop = styled.View`
  height: ${RFValue(55)}px;
  width: ${RFValue(350)}px;
  background-color:#92A1E8;

  border-radius: 10px;

  justify-content: space-around;
  align-items: center;
  margin-bottom: 120px;
  flex-direction: row;
  
`;

export const Title = styled.Text`

`;

export const ContainerContent = styled.View`
  width: ${RFValue(350)}px;
  height: ${RFValue(225)}px;
  background-color:#92A1E8;

  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;