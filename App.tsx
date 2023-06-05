import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Teste } from './src/controller/services/teste.service';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const teste = new Teste()
  const [values, setValues] = useState([])

  function click(val: string) {
teste.getTeste(val)
  }

  useEffect(() => {
    teste.getAllTeste().then(
      (resp) => setValues(resp)
    )
  }, [])

  return (
    <View>
      <Text>Hello World</Text>
      {values.length != 0 &&
        values.map(i => {
          return (
            <div key={i.id}>
              <Text >{i.nome}</Text>
              <button onClick={() => click(i.id)} >ação</button>
            </div>
          )
        })
      }
    </View>
  );
}