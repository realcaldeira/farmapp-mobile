import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { Login } from '../screens/Login';
import { NewAccountPersonal } from '../screens/NewAccountPersonal';
import { NewAccountPharmacy } from '../screens/NewAccountPharmacy';
import { TermsLGPD } from '../screens/TermsLGPD';
import { Success } from '../screens/Success';

const { Navigator, Screen } = createStackNavigator();

export function AuthStackRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >

      <Screen
        name="Login"
        component={Login}

      />

      <Screen
        name="NewAccountPersonal"
        component={NewAccountPersonal}
      />
      <Screen
        name="NewAccountPharmacy"
        component={NewAccountPharmacy}
      />
      <Screen
        name="TermsLGPD"
        component={TermsLGPD}
      />
      <Screen
        name="Success"
        component={Success}
      />

    </Navigator>
  )
}