import React, { useContext, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import axios from 'axios';
import jwt_decode from "jwt-decode";

import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Container, Header, Imagem, Prev, PrevTitle, ContainerForm } from './styles';
import Logo from '../../assets/logo.png';
import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';
import { AuthContext } from '../../providers/auth';


// interface FormData {
//   cnpj: string;
//   razaoSocial: string;
//   nomeFantasia: string;
//   alvaraDeFuncionamento: string;
//   numero: string;
//   password: string;
//   passwordRepeat: string;
//   cep: string;
//   endereco: string;
//   site: string;
//   telefone?: string;
//   celular: string;
// }

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
  cep: Yup
    .number()
    .typeError('O campo deve ser numérico')
    .required('CEP é obrigatório'),
  endereco: Yup
    .string()
    .required('Endereco é obrigatório'),

})


export function NewAccountPharmacy() {
  const navigation = useNavigation();

  const { token } = useContext(AuthContext);
  var decoded = jwt_decode(token);

  const [cnpj, setCnpj] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [alvaraF, setAlvaraF] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [site, setSite] = useState('');
  const [telefone, setTelefone] = useState('');
  const [celular, setCelular] = useState('');

  const {
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleRegister() {
    const dataFull = {
      cnpj: cnpj,
      razaoSocial: razaoSocial,
      nomeFantasia: nomeFantasia,
      alvaraDeFuncionamento: alvaraF,
      numero: numero,
      cep: cep,
      endereco: endereco,
      bairro: bairro,
      cidade: cidade,
      uf: uf,
      site: site,
      email: decoded.Email,
      telefone: telefone,
      celular: celular,
      idCliente: Number(decoded.IdCliente),
    }

    try {
      axios({
        method: 'post',
        headers: {
          'Accept': 'application/hal+json',
          'Content-Type': 'application/merge-patch+json',
        },
        url: 'https://farmappapi.herokuapp.com/api/Cliente/CadastraContaFarmacia',
        data: dataFull
      }).then(function (response) {
        if (response.status === 200) {
          // navigation.navigate("Success");
          Alert.alert('Conta Farmácia criada com sucesso.');
          Alert.alert('ACESSE: http://farmappfront.herokuapp.com/Home para acessar sua conta farmácia.');
          navigation.navigate("Home");
        } else {
          console.log(response)
        }
      })

    } catch (error) {
      console.log(error)
    }
    console.log(dataFull);
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
            keyboardType="numeric"
            onChangeText={(t) => setCnpj(t)}
            error={errors.cnpj && errors.cnpj.message}
          />
          <InputForm
            name="razaoSocial"
            texto="Razão Social"
            control={control}
            placeholder="Razão Social"
            autoCapitalize="sentences"
            autoCorrect={false}
            onChangeText={(t) => setRazaoSocial(t)}
            error={errors.razaoSocial && errors.razaoSocial.message}
          />
          <InputForm
            name="razaoSocial"
            texto="Nome Fantasia"
            control={control}
            placeholder="Nome Fantasia"
            autoCapitalize="sentences"
            autoCorrect={false}
            onChangeText={(t) => setNomeFantasia(t)}
            error={errors.razaoSocial && errors.razaoSocial.message}
          />
          <InputForm
            name="alvaraDeFuncionamento"
            texto="Alvará de Funcionamento"
            control={control}
            placeholder="Alvará de Funcionamento"
            autoCapitalize="sentences"
            autoCorrect={false}
            onChangeText={(t) => setAlvaraF(t)}
            error={errors.alvaraDeFuncionamento && errors.alvaraDeFuncionamento.message}
          />
          <InputForm
            name="numero"
            texto="Número"
            control={control}
            placeholder="Número"
            autoCapitalize="sentences"
            autoCorrect={false}
            keyboardType="numeric"
            onChangeText={(t) => setNumero(t)}
            error={errors.numero && errors.numero.message}
          />

          <InputForm
            name="cep"
            texto="CEP"
            control={control}
            placeholder="CEP"
            autoCapitalize="sentences"
            autoCorrect={false}
            keyboardType="numeric"
            onChangeText={(t) => setCep(t)}
            error={errors.cep && errors.cep.message}
          />
          <InputForm
            name="endereco"
            texto="Endereço"
            control={control}
            placeholder="Endereço"
            autoCapitalize="sentences"
            autoCorrect={false}
            onChangeText={(t) => setEndereco(t)}
            error={errors.endereco && errors.endereco.message}
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
            onChangeText={(t) => setCidade(t)}
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
            name="site"
            texto="Site"
            control={control}
            placeholder="Site"
            autoCapitalize="sentences"
            autoCorrect={false}
            onChangeText={(t) => setSite(t)}
          />

          <InputForm
            name="telefone"
            texto="Telefone"
            control={control}
            placeholder="Telefone"
            autoCapitalize="sentences"
            autoCorrect={false}
            keyboardType="numeric"
            onChangeText={(t) => setTelefone(t)}
          />
          <InputForm
            name="celular"
            texto="Celular"
            control={control}
            placeholder="Celular"
            autoCapitalize="sentences"
            autoCorrect={false}
            keyboardType="numeric"
            onChangeText={(t) => setCelular(t)}
          />

          <Button title="Cadastrar" onPress={handleRegister} />
        </ContainerForm>

      </Container>
    </TouchableWithoutFeedback>
  )
}