import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';


import { Container, Imagem, ContainerContent, Title, ContainerButton, DivButton} from './styles';

export function PersonalOrPharmacy() {
  const navigation = useNavigation();

  function handleLogin(){

  }

  function handlePersonal(){
    navigation.navigate('NewAccountPersonal')
  }
  function handlePharmacy(){
    navigation.navigate('NewAccountPharmacy')
  }




  return (
      
          <Container>
            <StatusBar 
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
            />
              <Imagem source={Logo}/>
           
           <ContainerContent>
            <Title>Você deseja criar uma conta </Title>
            <ContainerButton>


              <DivButton>
                <Button title="Pessoal ?" onPress={handlePersonal} />

              </DivButton>
              <DivButton>
                <Button title="Farmácia ?" onPress={handlePharmacy} />

              </DivButton>
            </ContainerButton>
           </ContainerContent>
          </Container>
  );
}
