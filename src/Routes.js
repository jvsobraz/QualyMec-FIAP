import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Cadastrar from './screens/Cadastrar';
import Login from './screens/Login';
import Servicos from './screens/Servicos';
import Alimento from './screens/Alimento';
import ControleDoacao from './screens/ControleDoacao';
import Doador from './screens/Doador';
import HistoricoSoliticacao from './screens/HistoricoSolicitacao';
import Ong from './screens/Ong';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Tab.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }} />
        <Tab.Screen name="Alimento" component={Alimento} options={{ headerShown: false }} />
        <Tab.Screen name="ControleDoacao" component={ControleDoacao} options={{ headerShown: false }} />
        <Tab.Screen name="Doador" component={Doador} options={{ headerShown: false }} />
        <Tab.Screen name="HistoricoSolicitacao" component={HistoricoSoliticacao} options={{ headerShown: false }} />
        <Tab.Screen name="Ong" component={Ong} options={{ headerShown: false }} />
        <Tab.Screen name="Serviços" component={Servicos} options={{ headerShown: false }} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}