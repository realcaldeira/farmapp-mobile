import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme })=> theme.colors.background_primary};

  justify-content: space-around;
  align-items: center;
`;


export const ContainerContentTop = styled.View`
 
  height: ${RFValue(55)}px;
  width: ${RFValue(350)}px;
  
  justify-content: space-around;
  align-items: center;
  
`;

export const Content = styled.View`
  
  background-color:#92A1E8;
  flex-direction: row;
  margin-top: ${RFValue(200)}px;
  border-radius: 10px;
`;


export const ContainerContent = styled.View`
  width: ${RFValue(350)}px;
  height: ${RFValue(225)}px;
  background-color:#92A1E8;

  border-radius: 10px;

  justify-content: center;
  align-items: center;
  z-index: 40
`;