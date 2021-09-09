import React from 'react';
import { Alert, StatusBar } from 'react-native';


import { Keyboard,TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Container, Imagem, ContainerSuccess, Title } from './styles';
import LottieView from 'lottie-react-native';
import Animation from '../../../assets/33639-sucesso.json';

export function Success() { 
  const navigation = useNavigation();

 

  function handleOk(){
    navigation.navigate('Login')
    Alert.alert('VOCÊ RECEBÁ UMA EMAIL PARA CONFIRMAR SEU CADASTRO.')
  }



  return (
        <TouchableWithoutFeedback  onPress={Keyboard.dismiss} > 
          <Container>
            <StatusBar 
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
            />
              <Imagem source={Logo}/>
            <ContainerSuccess>
                <LottieView source={Animation} autoPlay loop={false} style={{width: 250}} />
                <Title>Dados Salvos com {'\n'}SUCESSO</Title>

                <Button title="OK"  onPress={handleOk} color={'#4FD05B'}/>
           </ContainerSuccess>

          </Container>
        </TouchableWithoutFeedback >
  
  );
}
