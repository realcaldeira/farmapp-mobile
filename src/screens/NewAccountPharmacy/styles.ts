import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background_primary};
  justify-content: center;
  align-content: center;
  
  `;

export const Header = styled.View`
  height: 10%;
  margin-top: ${getStatusBarHeight()}px;

  flex-direction: row;
  align-items: center;
`;

export const Prev = styled.TouchableOpacity`
  margin-left: ${RFValue(25)}px;

  width: ${RFValue(83)}px;
  height: ${RFValue(35)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_tertiary};

  border-radius: ${RFValue(22)}px;
`;

export const PrevTitle = styled.Text`
  font-size: ${RFValue(20)}px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Imagem = styled.Image`


  width: ${RFValue(100)}px;
  height: ${RFValue(30)}px;
  
  margin-left: ${RFValue(50)}px;

`;

export const ContainerForm = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 20,
    paddingTop: 10,
    margin: 10,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})`
  width: ${RFValue(350)}px;
  height: ${RFValue(561)}px;
  
  background-color: ${({ theme }) => theme.colors.background_secondary};
  margin: 5%;
  

  border-radius: 10px;  
`;

export const ContainerCep = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`;

