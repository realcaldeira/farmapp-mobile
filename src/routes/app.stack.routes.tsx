import React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { NewAccountPersonal } from '../screens/NewAccountPersonal';

const { Navigator, Screen } = createNativeStackNavigator();

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
    </Navigator>
  )
}