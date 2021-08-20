import React from 'react';

import { useForm } from 'react-hook-form';

import { Container, Header, Imagem, Prev, PrevTitle, ContainerForm, Row } from './styles';
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


export function NewAccountPersonal(){
  const { 
    control,
    handleSubmit
  } = useForm();

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
  }

  return(
    <Container>
      <Header>
        <Prev>
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
          // type="text"
        />
        <InputForm 
          name="email"
          texto="E-mail"
          control={control}
          placeholder="E-mail"
          // type="email"
        />
        
        <Row>
          <InputForm 
            name="password"
            texto="Senha"
            control={control}
            placeholder="Senha"
            // type="password"
          />

          <InputForm 
            name="passwordRepeat"
            texto="Repita a Senha"
            control={control}
            placeholder="Repita a Senha"
          />
         </Row>
          <InputForm 
            name="cpf"
            texto="CPF"
            control={control}
            placeholder="CPF"
          />
          <InputForm 
            name="birthDay"
            texto="Data de Nascimento"
            control={control}
            placeholder="Data de Nascimento"
          />
          <InputForm 
            name="cep"
            texto="CEP"
            control={control}
            placeholder="CEP"
          />
          <InputForm 
            name="endereco"
            texto="Endereço"
            control={control}
            placeholder="Endereço"
          />
          <InputForm 
            name="numero"
            texto="Número"
            control={control}
            placeholder="Número"
          />
 
      <Button title="Cadastrar" onPress={handleSubmit(handleRegister)}/>
      </ContainerForm>

    </Container>
  )
}