import React from 'react';
import { useNavigation, useRoute  } from '@react-navigation/native';

import { Container, Header, Imagem, Prev, PrevTitle, ContainerView, Title} from './styles';
import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';

interface Params {
  data: {}
}

export function TermsLGPD(){
  const route = useRoute();
  const { data } = route.params as Params;

  const navigation = useNavigation();



  function handleGoBack(){
    navigation.goBack()
  }

  function handleNewAccount(){
    console.log(data)
  }

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