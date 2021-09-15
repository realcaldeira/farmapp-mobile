import React from 'react';

import { createDrawerNavigator  } from '@react-navigation/drawer';
// import { AppStackRoutes } from './app.stack.routes';

import { Home } from '../screens/Home';
import { AccessLocation } from '../screens/AccessLocation';

const { Navigator, Screen} = createDrawerNavigator();

export function AppDrawerRoutes(){
  return(
    <Navigator

      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="AccessLocation"
        component={AccessLocation}
      />
    </Navigator>
  )
}