import React, { useContext, useEffect, useState } from 'react';
import { Container, ContainerContentTop, Content } from './styles';
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import { ActivityIndicator } from 'react-native';

import { CheckBox } from 'react-native-elements';
import { Alert } from 'react-native';
import { Button } from '../../components/Button';
import { AuthContext } from '../../providers/auth';

import jwt_decode from "jwt-decode";
import axios from 'axios';

interface Location {
  latitude?: number;
  longitude?: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
}


export function AccessLocation() {
  const [location, setLocation] = useState(true);
  const [region, setRegion] = useState<Location>({});


  const { token } = useContext(AuthContext);

  var decoded = jwt_decode(token);


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
  }, []);


  if (!region.latitude) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#0000ff" />
      </Container>
    )
  }


  async function handleConfirm() {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const bodyParameters = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
      idTipoEndereco: location,
      idContaPessoal: decoded.IdContaPessoal
    };

    axios.post(
      'https://farmappapi.herokuapp.com/api/Endereco/AddFromLatLong',
      bodyParameters,
      config
    ).then((json) =>
      json.status === 200
        ?
        Alert.alert('DADOS SALVOS COM SUCESSO')
        : '')
      .catch(console.log);
  }

  return (

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
            textStyle={{ color: 'white', fontSize: 18 }}
            checked={location}

            onPress={() => setLocation(!location)}
          />

          <CheckBox
            title="Trabalho"
            checkedIcon="check"
            checkedColor="green"
            containerStyle={{
              backgroundColor: '#92A1E8',
              borderColor: '#92A1E8',

            }}
            textStyle={{ color: 'white', fontSize: 18 }}
            uncheckedIcon='circle-o'
            uncheckedColor='white'
            checked={!location}

            onPress={() => setLocation(!location)}
          />
        </Content>


      </ContainerContentTop>

      {
        region.latitude &&
        <MapView
          style={{ width: '100%', height: '100%', marginTop: 70, zIndex: -99 }}
          loadingEnabled={true}
          region={{
            latitude: Number(region.latitude),
            longitude: Number(region.longitude),
            latitudeDelta: 0.0922,
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
      <Button title="Confirmar" onPress={handleConfirm} style={{ marginBottom: 60, }} />

    </Container>
  );
}