import React from 'react';
import { StatusBar } from 'react-native';

import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Container, Header, Imagem, Prev, PrevTitle, ContainerForm } from './styles';
import Logo from '../../assets/logo.png';
import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';

interface FormData {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  alvaraDeFuncionamento: string;
  numero: string;
  password: string;
  passwordRepeat: string;
  cep: string;
  endereco: string;
  site: string;
  email: string;
  celular: string;
}

const schema = Yup.object().shape({
  cnpj: Yup
    .string()
    .required('CNPJ é obrigatório.'),
  razaoSocial: Yup
    .string()
    .required('Razão Social é obrigatório'),
  nomeFantasia: Yup
    .string()
    .required('Nome Fantasia é obrigatório'),
  alvaraDeFuncionamento: Yup
    .string()
    .required('Alvará de Funcionamento é obrigatório'),
  numero: Yup
    .number()
    .typeError('O campo deve ser numérico')
    .required('Número é obrigatório'),
  password: Yup
    .string()
    .required('Senha é obrigatório'),
  passwordRepeat: Yup
    .string()
    .required('Repetição de senha é obrigatório'),
  cep: Yup
    .number()
    .typeError('O campo deve ser numérico')
    .required('CEP é obrigatório'),
  endereco: Yup
    .string()
    .required('Endereco é obrigatório'),
  email: Yup
    .string()
    .required('E-mail é obrigatório'),

})


export function NewAccountPharmacy() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleRegister(form: FormData) {


    const data = {

      cnpj: form.cnpj,
      razaoSocial: form.razaoSocial,
      nomeFantasia: form.nomeFantasia,
      alvaraDeFuncionamento: form.alvaraDeFuncionamento,
      numero: form.numero,
      password: form.password,
      passwordRepeat: form.passwordRepeat,
      cep: form.cep,
      endereco: form.endereco,
      site: form.site,
      email: form.email,
      // telefone: form.telefone,
      celular: form.celular,
    }
    console.log(data);
    navigation.navigate('TermsLGPD', { data })
  }

  function handleGoBack() {
    navigation.goBack()
  }



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Header>
          <Prev
            onPress={handleGoBack}
          >
            <PrevTitle>Voltar</PrevTitle>
          </Prev>
          <Imagem source={Logo} />
        </Header>

        <ContainerForm>
          <InputForm
            name="cnpj"
            texto="CNPJ"
            control={control}
            placeholder="CNPJ"
            error={errors.cnpj && errors.cnpj.message}
          />
          <InputForm
            name="razaoSocial"
            texto="Razão Social"
            control={control}
            placeholder="Razão Social"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.razaoSocial && errors.razaoSocial.message}
          />
          <InputForm
            name="razaoSocial"
            texto="Nome Fantasia"
            control={control}
            placeholder="Nome Fantasia"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.razaoSocial && errors.razaoSocial.message}
          />
          <InputForm
            name="alvaraDeFuncionamento"
            texto="Alvará de Funcionamento"
            control={control}
            placeholder="Alvará de Funcionamento"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.alvaraDeFuncionamento && errors.alvaraDeFuncionamento.message}
          />
          <InputForm
            name="numero"
            texto="Número"
            control={control}
            placeholder="Número"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.numero && errors.numero.message}
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
            name="cep"
            texto="CEP"
            control={control}
            placeholder="CEP"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.cep && errors.cep.message}
          />
          <InputForm
            name="endereco"
            texto="Endereço"
            control={control}
            placeholder="Endereço"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.endereco && errors.endereco.message}
          />
          <InputForm
            name="site"
            texto="Site"
            control={control}
            placeholder="Site"
            autoCapitalize="sentences"
            autoCorrect={false}
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
            name="telefone"
            texto="Telefone"
            control={control}
            placeholder="Telefone"
            autoCapitalize="sentences"
            autoCorrect={false}

          />
          <InputForm
            name="celular"
            texto="Celular"
            control={control}
            placeholder="Celular"
            autoCapitalize="sentences"
            autoCorrect={false}

          />


          <Button title="Cadastrar" onPress={handleSubmit(handleRegister)} />
        </ContainerForm>

      </Container>
    </TouchableWithoutFeedback>
  )
}