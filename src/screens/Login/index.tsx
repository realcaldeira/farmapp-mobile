import React from 'react';
import { Keyboard,TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Container, Imagem, Form, Password, PasswordTitle, CreateAnAccount, CreateAnAccountTitle } from './styles';

interface FormData {
  name: string;
  password: string;
}

const schema = Yup.object().shape({
  name: Yup
  .string()
  .required('Nome é obrigatório.'),

})

export function Login() {
  
  const navigation = useNavigation();

  const { 
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleLogin(form: FormData){
    const data = {
      name: form.name,
      password: form.password
    }
    console.log(data)
  }

  function createAccount(){
    navigation.navigate('PersonalOrPharmacy')
  }


  return (
        <TouchableWithoutFeedback  onPress={Keyboard.dismiss} > 
          <Container>
              <Imagem source={Logo}/>
            <Form>
                <InputForm 
                  name="login"
                  texto="Login"
                  control={control}
                  placeholder="Login"
                  error={errors.login && errors.login.message}
                  
                />

                <InputForm
                  name="password"
                  texto="Senha"
                  control={control}
                  placeholder="Senha"
                  error={errors.password && errors.password.message}
                />

                <Button title="Entrar" onPress={handleSubmit(handleLogin)} />

              <Password>
                <PasswordTitle>Esqueci minha senha</PasswordTitle>
              </Password>
          </Form>

            <CreateAnAccount>
              <CreateAnAccountTitle
                 onPress={createAccount}
              >
                Cadastrar conta
            </CreateAnAccountTitle>
            </CreateAnAccount>
          </Container>
        </TouchableWithoutFeedback >
  
  );
}
