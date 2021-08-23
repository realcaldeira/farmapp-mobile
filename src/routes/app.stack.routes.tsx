import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';

import { Login } from '../screens/Login';
import { NewAccountPersonal } from '../screens/NewAccountPersonal';
import { PersonalOrPharmacy } from '../screens/PersonalOrPharmacy';
import { NewAccountPharmacy } from '../screens/NewAccountPharmacy';
import { TermsLGPD } from '../screens/TermsLGPD';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes(){
  return(
    <Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Login"
    >
      <Screen  
        name="Login"
        component={Login}
        
      />
      <Screen  
        name="PersonalOrPharmacy"
        component={PersonalOrPharmacy}
        
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
    </Navigator>
  )
}