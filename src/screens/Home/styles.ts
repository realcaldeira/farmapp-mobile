import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background_primary};

`;

export const Title = styled.Text`
  color: white;
`;

export const ContainerSearch = styled.View`
  height: 10%;
  padding-top: ${RFValue(30)}px;
  /* background-color: red; */
  flex-direction: row;
  justify-content: space-between;
  margin: 0 12px;
  margin-bottom: ${RFValue(27)}px;
`;

export const InputSearch = styled.TextInput`
  width: ${RFValue(255)}px;
  height:  ${RFValue(37)}px;
  
  text-align: center;
  color: white;
  background: #525F8F;
  border-radius: 10px;
`;

export const ButtonSearch = styled.TouchableOpacity`
  width: ${RFValue(104)}px;
  height:  ${RFValue(37)}px;
  
  justify-content: center;
  align-items: center;

  background: #525F8F;
  border-radius: 10px;
`;

export const ContainerOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(10)}px ${RFValue(50)}px;

`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

export const ButtonOptions = styled.TouchableOpacity<RadioBoxProps>`
  background-color: ${(props) => props.isActive ? '#C6CFF9' : '#FFF'};
  align-items: center;
  width: ${RFValue(125)}px;
  height: ${RFValue(20)}px;
  border-radius: 5px;
  margin-bottom: ${RFValue(27)}px;
`;
export const TitleOptions = styled.Text`
  color: black;
`;

export const List = styled.FlatList`
  height: 100%;
  /* margin-top: 20px; */
  /* background-color: red; */
`;

export const Card = styled.View`
  width: 90%;
  height: ${RFValue(100)}px;
  margin: 0 ${RFValue(20)}px ;
  background-color: #92A1E8;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(20)}px;

  
`;

export const ContainerTitle = styled.Text`
  

`;
export const MedicamentoTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;
export const FarmaciaTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;
export const Preço = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;
export const Km = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;