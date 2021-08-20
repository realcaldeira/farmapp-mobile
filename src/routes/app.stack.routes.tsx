import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { NewAccountPersonal } from '../screens/NewAccountPersonal';
import { TermsLGPD } from '../screens/TermsLGPD';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes(){
  return(
    <Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Home"
    >
      <Screen  
        name="Home"
        component={Home}
        
      />
      <Screen  
        name="NewAccountPersonal"
        component={NewAccountPersonal}
      />
      <Screen  
        name="TermsLGPD"
        component={TermsLGPD}
      />
    </Navigator>
  )
}