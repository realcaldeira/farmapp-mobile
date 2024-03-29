import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
// import { AppStackRoutes } from './app.stack.routes';

import { Home } from '../screens/Home';
import { AccessLocation } from '../screens/AccessLocation';
import { RecipeSearch } from '../screens/RecipeSearch';
import { NotRecipeSearch } from '../screens/NotRecipeSearch';
import { MyList } from '../screens/MyList';
import { NewAccountPharmacy } from '../screens/NewAccountPharmacy';

import { AntDesign, MaterialIcons } from '@expo/vector-icons'

const { Navigator, Screen } = createDrawerNavigator();

export function AppDrawerRoutes() {
  return (
    <Navigator

      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#1C2139',
          paddingTop: 20

        },
        drawerActiveBackgroundColor: '#CFE0ED',
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#FFF',

      }}
      initialRouteName="Home"
    >
      <Screen
        name="Inicio"
        component={Home}
        options={{
          title: 'Home',
          drawerIcon: ({ size, color }) => (
            <AntDesign
              name="home"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Screen
        name="Medicamentos com receita"
        component={RecipeSearch}
        options={{
          title: 'Com receita',
          drawerIcon: ({ size, color }) => (
            <AntDesign
              name="medicinebox"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="Medicamentos sem receita"
        component={NotRecipeSearch}
        options={{
          title: 'Sem receita',
          drawerIcon: ({ size, color }) => (
            <AntDesign
              name="medicinebox"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="Minha lista"
        component={MyList}
        options={{
          title: 'Minha lista',
          drawerIcon: ({ size, color }) => (
            <MaterialIcons
              name="stars"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Screen
        name="Localização"
        component={AccessLocation}
        options={{
          title: 'Localização',
          drawerIcon: ({ size, color }) => (
            <MaterialIcons
              name="gps-fixed"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Screen
        name="NewAccountPharmacy"
        component={NewAccountPharmacy}
        options={{
          title: 'Criar conta farmácia',
          drawerIcon: ({ size, color }) => (
            <AntDesign
              name="adduser"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}