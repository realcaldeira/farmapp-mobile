import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStackRoutes } from './app.stack.routes';
import { AppDrawerRoutes } from './app.drawer.routes';
import { AuthStackRoutes } from './auth.stack.routes';

import { AuthContext } from '../providers/auth';


// import { RecipeSearch } from '../screens/RecipeSearch';

interface User {
  token?: string;
}

export function Routes() {
  const { token } = useContext<User>(AuthContext);
  // console.log(token);
  return (
    <>
      <NavigationContainer>
        {token ? <AppStackRoutes /> : <AuthStackRoutes />}
        {/* <RecipeSearch /> */}
      </NavigationContainer>
    </>
  )
}