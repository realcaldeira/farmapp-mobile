import React from 'react';
import { Header } from '../../components/Header';

import {
  Container,
  Title
} from './styles';


export function Home() {

  return (
    <>
      <Header />
      <Container>
        <Title>HOME</Title>
      </Container>
    </>
  )
}