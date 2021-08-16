import React from 'react';

import Logo from '../../assets/logo.png';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

import { Container, Imagem, Form } from './styles';
export function Home() {
  return (
    <Container>
        <Imagem source={Logo}/>
      <Form>
        <Input texto='Login'/>
        <Input texto='Senha'/>

        <Button />
      </Form>
    </Container>
  );
}
