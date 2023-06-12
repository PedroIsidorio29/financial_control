import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import { Home } from './src/views/pages/home';
import { Adicionar } from './src/views/pages/adicionar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer children={
      <Stack.Navigator children={
        <React.Fragment>
          <Stack.Screen
            name='Home'
            options={{
              headerTintColor: 'red'
            }}
            component={Home} />
          <Stack.Screen
            name='Adicionar'
            options={{
              headerTintColor: 'red'
            }}
            component={Adicionar} />
        </React.Fragment>
      } initialRouteName='Home' />
    } />
    </NativeBaseProvider>
  );
}