import React from 'react';

import { useForm } from 'react-hook-form';

import { Container, Header, Imagem, Prev, PrevTitle, ContainerForm, Row } from './styles';
import Logo from '../../assets/logo.png';
import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';




export function NewAccountPersonal(){
  const { 
    control,
    handleSubmit
  } = useForm();

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
        />
        <InputForm 
          name="email"
          texto="E-mail"
          control={control}
          placeholder="E-mail"
        />
        
        
          <InputForm 
            name="password"
            texto="Senha"
            control={control}
            placeholder="Senha"
          />

          <InputForm 
            name="password-repeat"
            texto="Repita a Senha"
            control={control}
            placeholder="Repita a Senha"
          />
         
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
 
      <Button />
      </ContainerForm>

    </Container>
  )
}