import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
// import { AppStackRoutes } from './app.stack.routes';

import { Home } from '../screens/Home';
import { AccessLocation } from '../screens/AccessLocation';
import { RecipeSearch } from '../screens/RecipeSearch';
import { NotRecipeSearch } from '../screens/NotRecipeSearch';
import { MyList } from '../screens/MyList';

const { Navigator, Screen } = createDrawerNavigator();

export function AppDrawerRoutes() {
  return (
    <Navigator

      screenOptions={{
        headerShown: false
      }}
      initialRouteName="AccessLocation"
    >
      <Screen
        name="Inicio"
        component={Home}
      />
      <Screen
        name="Localização"
        component={AccessLocation}
      />
      <Screen
        name="Medicamentos com receita"
        component={RecipeSearch}
      />
      <Screen
        name="Medicamentos sem receita"
        component={NotRecipeSearch}
      />
      <Screen
        name="Minha lista"
        component={MyList}
      />
    </Navigator>
  )
}