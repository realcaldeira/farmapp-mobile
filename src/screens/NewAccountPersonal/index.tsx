import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard} from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Container, Header, Imagem, Prev, PrevTitle, ContainerForm } from './styles';
import Logo from '../../assets/logo.png';
import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';

interface FormData {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
  cpf: string;
  birthDay: string;
  cep: string;
  endereco: string;
  numero: string;
}

const schema = Yup.object().shape({
  name: Yup
  .string()
  .required('Nome é obrigatório.'),
  email: Yup
  .string()
  .required('Email é obrigatório'),
  password: Yup
  .string()
  .required('Senha é obrigatório'),
  passwordRepeat: Yup
  .string()
  .required('Repetição de senha é obrigatório'),
  cpf: Yup
  .number()
  .typeError('O campo deve ser numérico')
  .required('CPF é obrigatório'),
  birthDay: Yup
  .string()
  .required('Data de nascimento é obrigatório'),
  cep: Yup
  .number()
  .typeError('O campo deve ser numérico')
  .required('CEP é obrigatório'),
  endereco: Yup
  .string()
  .required('Endereco é obrigatório'),
  numero: Yup
  .number()
  .typeError('O campo deve ser numérico')
  .required('Número é obrigatório'),

})


export function NewAccountPersonal(){
  const navigation = useNavigation();

  const { 
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleRegister(form: FormData){


    const data = {name: form.name,
    email: form.email,
    password: form.password,
    passwordRepeat: form.passwordRepeat,
    cpf: form.cpf,
    birthDay: form.birthDay,
    cep: form.cep,
    endereco: form.endereco,
    numero: form.numero,
  }
    console.log(data);
    navigation.navigate('TermsLGPD', { data })
  }

  function handleGoBack(){
    navigation.goBack()
  }

 

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Prev
            onPress={handleGoBack}
          >
            <PrevTitle>Voltar</PrevTitle>
          </Prev>
          <Imagem source={Logo}/>
        </Header>
        
        <ContainerForm>
          <InputForm 
            name="name"
            texto="Nome e Sobrenome"
            control={control}
            placeholder="Nome e Sobrenome"
            error={errors.name && errors.name.message}
          />
          <InputForm 
            name="email"
            texto="E-mail"
            control={control}
            placeholder="E-mail"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.email && errors.email.message}
          />
          
        
            <InputForm 
              name="password"
              texto="Senha"
              control={control}
              placeholder="Senha"
              secureTextEntry={true}
              error={errors.password && errors.password.message}
            />

            <InputForm 
              name="passwordRepeat"
              texto="Repita a Senha"
              control={control}
              placeholder="Repita a Senha"
              secureTextEntry={true}
              error={errors.passwordRepeat && errors.passwordRepeat.message}
            />
        
            <InputForm 
              name="cpf"
              texto="CPF"
              control={control}
              placeholder="CPF"
              keyboardType="numeric"
              error={errors.cpf && errors.cpf.message}
            />
            <InputForm 
              name="birthDay"
              texto="Data de Nascimento"
              control={control}
              placeholder="Data de Nascimento"
              error={errors.birthDay && errors.birthDay.message}
            />
            <InputForm 
              name="cep"
              texto="CEP"
              control={control}
              placeholder="CEP"
              keyboardType="numeric"
              error={errors.cep && errors.cep.message}
            />
            <InputForm 
              name="endereco"
              texto="Endereço"
              control={control}
              placeholder="Endereço"
              error={errors.endereco && errors.endereco.message}
            />
            <InputForm 
              name="numero"
              texto="Número"
              control={control}
              placeholder="Número"
              keyboardType="numeric"
              error={errors.numero && errors.numero.message}
            />
  
        <Button title="Cadastrar" onPress={handleSubmit(handleRegister)}/>
        </ContainerForm>

      </Container>
    </TouchableWithoutFeedback>
  )
}