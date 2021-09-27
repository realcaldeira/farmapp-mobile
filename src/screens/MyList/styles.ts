import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const List = styled.FlatList`
  height: 100%;
`;

export const ButtonSync = styled.TouchableOpacity`
  
`;

export const ContainerBody = styled.View`
  height: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  margin-bottom: 20px;
`;