import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: ${({ theme })=> theme.colors.background_primary};
  justify-content: center;
  align-content: center;

`;

export const Header = styled.View`
  height: 10%;
  margin-top: ${RFValue(10)}px;

  flex-direction: row;
  align-items: center;
  
`;

export const Prev = styled.TouchableOpacity`
  margin-left: ${RFValue(25)}px;

  width: ${RFValue(83)}px;
  height: ${RFValue(35)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme })=> theme.colors.background_tertiary};

  border-radius: ${RFValue(22)}px;
`;

export const PrevTitle = styled.Text`
  font-size: ${RFValue(20)}px;

  color: ${({ theme })=> theme.colors.text};
`;

export const Imagem = styled.Image`


  width: ${RFValue(100)}px;
  height: ${RFValue(30)}px;
  
  margin-left: ${RFValue(50)}px;

`;

// contentContainerStyle: {
//   paddingBottom: 20,
//   paddingTop: 10,
//   margin: 10,
//   alignItems: 'center',
export const ContainerView = styled.View`

  width: ${RFValue(359)}px;
  height: ${RFValue(561)}px;
  
  background-color: ${({ theme })=> theme.colors.background_secondary};
  margin: 5%;
  
  align-items: center;
  justify-content: center;
  border-radius: 20px;  
`;

export const Title = styled.Text`
  margin-top: ${RFValue(116)}px;
  margin-bottom: ${RFValue(130)}px;
  text-align: center;
`;