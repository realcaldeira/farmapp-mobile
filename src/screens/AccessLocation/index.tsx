import React, { useState } from 'react';
import { Container, ContainerContentTop, Title, ContainerContent } from './styles';

import { CheckBox } from 'react-native-elements';

export function AccessLocation(){
  const [isCasa, setIsCasa] = useState(false);
  const [isTrabalho, setIsTrabalho] = useState(false);

  return(
    <Container>
      <ContainerContentTop>
      
      <CheckBox 
        title="Casa"
        checkedIcon="check"
        checkedColor="green"
        uncheckedIcon='circle-o'
        uncheckedColor='white'
        containerStyle={{
          backgroundColor: '#92A1E8', 
          borderColor: '#92A1E8',
          
        }}
        textStyle={{color: 'white', fontSize: 18}}
        checked={isCasa}
        
        onPress={()=> setIsCasa(!isCasa)}
      />

      <CheckBox 
        title="Trabalho"
        checkedIcon="check"
        checkedColor="green"
        containerStyle={{
          backgroundColor: '#92A1E8', 
          borderColor: '#92A1E8',
          
        }}
        textStyle={{color: 'white', fontSize: 18}}
        uncheckedIcon='circle-o'
        uncheckedColor='white'
        checked={isTrabalho}
        
        onPress={()=> setIsTrabalho(!isTrabalho)}
      />
        
        

      </ContainerContentTop>

      <ContainerContent>

      </ContainerContent>
    </Container>
  );
}