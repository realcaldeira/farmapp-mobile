import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';


import { AppDrawerRoutes } from './app.drawer.routes';

import { AccessLocation } from '../screens/AccessLocation';
import { Home } from '../screens/Home';
import { Success } from '../screens/Success';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes(){
  return(
    <Navigator
    screenOptions={{ headerShown: false }}
    >
      <Screen  
        name="AppDrawerRoutes"
        component={AppDrawerRoutes}
        
      />

      <Screen  
        name="Success"
        component={Success}
      />
      <Screen  
        name="AccessLocation"
        component={AccessLocation}
      />
      <Screen  
        name="Home"
        component={Home}
      />
    </Navigator>
  )
}