import React from 'react';

import { KeyboardAvoidingView, Keyboard,TouchableWithoutFeedback } from 'react-native';

import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Imagem, Form, Password, PasswordTitle, CreateAnAccount, CreateAnAccountTitle } from './styles';
export function Home() {
  function handleLogin(){

  }


  return (
      <KeyboardAvoidingView behavior="height" enabled>
        <TouchableWithoutFeedback  onPress={Keyboard.dismiss} > 
          <Container>
              <Imagem source={Logo}/>
            <Form>
              <Input 
                texto='Login'
                placeholder="Login"
                autoCorrect={false}
                autoCapitalize='none'
              />

              <Input
                texto='Senha'
                placeholder="Senha"
                secureTextEntry={true}
              />

              <Button title="Entrar" onPress={handleLogin} />

            <Password>
              <PasswordTitle>Esqueci minha senha</PasswordTitle>
            </Password>
            </Form>

            <CreateAnAccount>
              <CreateAnAccountTitle>Cadastrar conta</CreateAnAccountTitle>
            </CreateAnAccount>
          </Container>
        </TouchableWithoutFeedback >
    </KeyboardAvoidingView>
  );
}
