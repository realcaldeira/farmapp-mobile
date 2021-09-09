import React, { useEffect } from 'react';
import { useNavigation, useRoute  } from '@react-navigation/native';

import { Container, Header, Imagem, Prev, PrevTitle, ContainerView, Title} from './styles';
import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import axios from 'axios';
import { Alert } from 'react-native';

interface Params {
  data: {
      name: string;
      email: string;
      password: string;
      passwordRepeat: string;
      cpf: string;
      birthDay: string;
      numero: string;
      complemento: string;

      cep: string;
      logradouro: string;
     
      bairro: string;
      localidade: string;
      uf: string; 
  }
}
interface ParamsEndereco {
  allCep: {
      cep: string;
      logradouro: string;
     
      bairro: string;
      localidade: string;
      uf: string;   
  }
}


export function TermsLGPD(){
  const route = useRoute();
  const navigation = useNavigation();

  // const { data } = route.params as Params;

  function handleGoBack(){
    navigation.goBack()
  }

  async function handleNewAccount(){
    const { data } = route.params as Params;
    const { allCep } = route.params as ParamsEndereco;

    const carDTO = {
        nome: data.name,
        email: data.email,
        senha: data.password,
        repeteSenha: data.passwordRepeat,
        cpf: data.cpf,
        dataNascimento: data.birthDay,
        celular: ' ',
        cep: data.cep,
        uf: data.uf,
        cidade: data.localidade,
        bairro: data.bairro,
        endereco: data.logradouro,
        numero: data.numero,
        complemento: data.complemento,
        situacaoConsentimento: "A"
    }
     try{

      const response = axios({
        method: 'post',
        headers: {
          'Accept': 'application/hal+json',
          'Content-Type': 'application/merge-patch+json'
      },
        url: 'https://farmappapi.herokuapp.com/api/Cliente',
        data: carDTO
    });

    
      console.log("RESPONSE");
      console.log(response);

      console.log('DATA')
      console.log(data)

      console.log('PACOTE')
      console.log(carDTO)

    }catch(error){
      console.log(error)
      console.log(carDTO)
      
    } finally {
      navigation.navigate("Success");
    }
   
  }

  useEffect(()=> {
    // console.log(data)
  },[])

  return(
    <Container>
      <Header>
        <Prev
          onPress={handleGoBack}
        >
          <PrevTitle>Voltar</PrevTitle>
        </Prev>
        <Imagem source={Logo}/>
      </Header>
    
      <ContainerView>
        <Title>
        A prestação dos serviços da {'\n'} 
        farmapp requer o tratamento de {'\n'}
        dados pessoais. Conforme a{'\n'} 
        Lei 13.709 de 14 de agosto de {'\n'}
        2018, todo tratamento de dados {'\n'}
        de identificação pessoal deve{'\n'} 
        ser expressamente autorizado {'\n'}
        pelo titular dos dados que {'\n'}
        serão tratados. Você será {'\n'}
        direcionado para o termo de {'\n'}
        consentimento do usuário {'\n'}
        farmapp para o tratamento de {'\n'}
        dados pessoais
        </Title>

        <Button title="Cadastrar" onPress={handleNewAccount}/>
      </ContainerView>
      
 
     

    </Container>
  )
}