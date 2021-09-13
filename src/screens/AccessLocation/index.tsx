import React, { useEffect, useState } from 'react';
import { Container, ContainerContentTop, Content } from './styles';
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from "react-native-maps";
import * as Location from "expo-location";

import { ActivityIndicator } from 'react-native';

import { CheckBox } from 'react-native-elements';
import { Alert } from 'react-native';
import { Button } from '../../components/Button';

interface Location {
  latitude?: number;
  longitude?: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
}


export function AccessLocation(){
  const [isCasa, setIsCasa] = useState(false);
  const [isTrabalho, setIsTrabalho] = useState(false);
 
  const [region, setRegion] = useState<Location>({  });

  const getCurrentPosition = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Ops!", "Permissão de acesso a localização negada.");

    } else {
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
  
      setRegion({ latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
    }
  }
  
  useEffect(() => {
    getCurrentPosition();
    console.log(region)
  }, []);


 if(!region.latitude){
   return(<Container>

     <ActivityIndicator size="large" color="#0000ff" />
   </Container>
   )
 }

  return(

    <Container>
      <ContainerContentTop>
      
      <Content>
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
      </Content>
        
     
      </ContainerContentTop>
      
      { 
      region.latitude &&
        <MapView 
          style={{ width: '100%', height: '100%', marginTop: 70, zIndex: -99}}
          loadingEnabled={true}
          region={{
            latitude:  Number(region.latitude),
            longitude: Number(region.longitude),
            latitudeDelta:0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker 
            coordinate={{
              latitude: Number(region.latitude),
              longitude: Number(region.longitude),
              
            }}
          />
        </MapView>

      }
      <Button title="Confirmar" onPress={()=>{
        console.log('teste')
      }}  style={{marginBottom: 60, }}/>
     
    </Container>
  );
}