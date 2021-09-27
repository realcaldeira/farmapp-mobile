import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Container, Header, Imagem, Prev, PrevTitle, ContainerForm, ContainerCep } from './styles';
import Logo from '../../assets/logo.png';
import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';
import { apiCep } from '../../services/api';

interface FormData {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
  cpf: string;
  birthDay: string;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  numero: string;
}

interface ParamsEndereco {
  allCep: {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    numero: string;
  }
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
  // cep: Yup
  // .number()
  // .typeError('O campo deve ser numérico')
  // .required('CEP é obrigatório'),
  endereco: Yup
    .string()
    .required('Endereco é obrigatório'),
  numero: Yup
    .number()
    .typeError('O campo deve ser numérico')
    .required('Número é obrigatório'),
})


export function NewAccountPersonal() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthDay, setBirthDay] = useState('');

  const [buscacep, setBuscaCep] = useState('');
  const [allCep, setAllCep] = useState<FormData[]>([]);
  const [cep, setCep] = useState();
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');
  const [numero, setNumero] = useState('');


  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleRegister(form: FormData) {
    const data = {
      name: name,
      email: email,
      password: password,
      passwordRepeat: passwordRepeat,
      cpf: cpf,
      birthDay: birthDay,
      cep: cep,
      logradouro: logradouro,
      complemento: complemento,
      bairro: bairro,
      localidade: localidade,
      uf: uf,
      numero: numero,
    }
    if (password === passwordRepeat && password.length > 0) {
      console.log(data);
      navigation.navigate('TermsLGPD', { data })
    } else {
      Alert.alert('As senhas devem ser iguais.')

    }
  }

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleCep(cep: string) {
    try {
      const response = await apiCep.get(`${cep}/json/`);
      const data = response.data;

      setAllCep(data);

      setLogradouro(data.logradouro);
      setBairro(data.bairro);
      setLocalidade(data.localidade);
      setUf(data.uf);
      console.log(data)
    } catch (error) {
      console.log(error)
    }

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
            name="name"
            texto="Nome e Sobrenome"
            control={control}
            placeholder="Nome e Sobrenome"
            onChangeText={(t) => setName(t)}
            error={errors.name && errors.name.message}
          />
          <InputForm
            name="email"
            texto="E-mail"
            control={control}
            placeholder="E-mail"
            autoCapitalize="sentences"
            autoCorrect={false}
            onChangeText={(t) => setEmail(t)}
          // error={errors.email && errors.email.message}
          />


          <InputForm
            name="password"
            texto="Senha"
            control={control}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={(t) => setPassword(t)}
          // error={errors.password && errors.password.message}
          />

          <InputForm
            name="passwordRepeat"
            texto="Repita a Senha"
            control={control}
            placeholder="Repita a Senha"
            secureTextEntry={true}
            onChangeText={(t) => setPasswordRepeat(t)}
          // error={errors.passwordRepeat && errors.passwordRepeat.message}
          />

          <InputForm
            name="cpf"
            texto="CPF"
            control={control}
            placeholder="CPF"
            keyboardType="numeric"
            onChangeText={(t) => setCpf(t)}
          // error={errors.cpf && errors.cpf.message}
          />
          <InputForm
            name="birthDay"
            texto="Data de Nascimento"
            control={control}
            placeholder="Data de Nascimento"
            onChangeText={(t) => setBirthDay(t)}
          // error={errors.birthDay && errors.birthDay.message}
          />

          {/* <ContainerCep> */}

          <InputForm
            name="cep"
            texto="CEP"
            control={control}
            placeholder="CEP"
            keyboardType="numeric"
            onChangeText={(t) => setCep(t)}
          // error={errors.cep && errors.cep.message}
          />

          {/* { allCep.length == 0 && */}
          {/* <Button title="Busca" onPress={()=> handleCep(buscacep)}/> */}

          {/* }
            { localidade.length > 0 && */}
          {/* <> */}
          <InputForm
            name="logradouro"
            texto="Logradouro"
            // value={logradouro}
            control={control}
            placeholder="Logradouro"
            onChangeText={(t) => setLogradouro(t)}
          />

          <InputForm
            name="complemento"
            texto="Complemento"
            control={control}
            placeholder="Complemento"
            onChangeText={(t) => setComplemento(t)}
          />

          <InputForm
            name="bairro"
            texto="Bairro"
            // value={bairro}
            control={control}
            placeholder="Bairro"
            onChangeText={(t) => setBairro(t)}
          />

          <InputForm
            name="cidade"
            texto="Cidade"
            // value={localidade}
            control={control}
            placeholder="Cidade"
            onChangeText={(t) => setLocalidade(t)}
          />

          <InputForm
            name="uf"
            texto="UF"
            // value={uf}
            control={control}
            placeholder="UF"
            onChangeText={(t) => setUf(t)}
          />

          <InputForm
            name="numero"
            texto="Número"
            control={control}
            placeholder="Número"
            keyboardType="numeric"
            onChangeText={(t) => setNumero(t)}
          />

          <Button title="Cadastrar" onPress={handleRegister} />

          {/* </>
      }  */}
        </ContainerForm>

      </Container>
    </TouchableWithoutFeedback>
  )
}