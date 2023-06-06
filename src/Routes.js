import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import { ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import CadastroOng from './src/screens/CadastroOng';
import CadastroDoador from './src/screens/CadastroDoador';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  function TabsDoador() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#ffffff',
          tabBarStyle: {
            backgroundColor: '#000000',
            borderTopColor: '#000000',
          }
        }}
        initialRouteName='CadastroDoador'
      >
        <Tab.Screen
          name="CadastroDoador"
          component={CadastroDoador}
          options={{
            tabBarLabel: 'Cadastro de Doador',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='format-list-bulleted' color={color} size={30} />
            )
          }}
        />
      </Tab.Navigator>
    )
  }

  function Login() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#ffffff',
          tabBarStyle: {
            backgroundColor: '#000000',
            borderTopColor: '#000000',
          }
        }}
        initialRouteName='Login'
      >
        <Stack.Screen
          name="Cadastro ONG"
          component={CadastroOng}
          options={{
            tabBarLabel: 'Cadastro ONG',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='arm-flex' color={color} size={30} />
            )
          }}
        />
        <Stack.Screen
          name="Cadastro Doador"
          component={CadastroDoador}
          options={{
            tabBarLabel: 'Cadastro Doador',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='format-list-bulleted' color={color} size={30} />
            )
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='format-list-bulleted' color={color} size={30} />
            )
          }}
        />
      </Stack.Navigator>
    )
  }

  let [fontsLoaded] = useFonts({ Lobster_400Regular });

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <NavigationContainer>
    /*{user.type === 'doador' ? <TabsDoador/> : <TabsOng />} */
     <Login/>
    </NavigationContainer>
  )
}

/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Cadastrar from './screens/Cadastrar';
import Login from './screens/Login';
import Servicos from './screens/Servicos';
import DadosSolo from './screens/DadosSolo';
import CadastroSolo from './screens/CadastroSolo';
import DadosClima from './screens/DadosClima';
import CadastroClima from './screens/CadastroClima';
import AlimentoClima from './screens/AlimentoClima';
import Climas from './screens/Climas';
import ClimaEquatorial from './screens/ClimaEquatorial';
import Equatorial from './screens/Equatorial';
import ClimaTropical from './screens/ClimaTropical';
import Tropical from './screens/Tropical';
import ClimaSubtropical from './screens/ClimaSubtropical'
import Subtropical from './screens/Subtropical';
import ClimaTropicalAltitude from './screens/ClimaTropicalAltitude';
import TropicalAltitude from './screens/TropicalAltitude';
import ClimaSemiarido from './screens/ClimaSemiarido';
import Semiarido from './screens/Semiarido';
import AlimentoSolo from './screens/AlimentoSolo';
import Solos from './screens/Solos';
import SoloArenoso from './screens/SoloArenoso';
import Arenoso from './screens/Arenoso';
import SoloArgiloso from './screens/SoloArgiloso';
import Argiloso from './screens/Argiloso';
import SoloHumoso from './screens/SoloHumoso';
import Humoso from './screens/Humoso';

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Tab.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }} />
        <Tab.Screen name="Serviços" component={Servicos} options={{ headerShown: false }} />
        <Tab.Screen name="DadosSolo" component={DadosSolo} options={{ headerShown: false }} />
        <Tab.Screen name="CadastroSolo" component={CadastroSolo} options={{ headerShown: false }} />
        <Tab.Screen name="DadosClima" component={DadosClima} options={{ headerShown: false }} />
        <Tab.Screen name="CadastroClima" component={CadastroClima} options={{ headerShown: false }} />
        <Tab.Screen name="AlimentoClima" component={AlimentoClima} options={{ headerShown: false }} />
        <Tab.Screen name="Climas" component={Climas} options={{ headerShown: false }} />
        <Tab.Screen name="ClimaEquatorial" component={ClimaEquatorial} options={{ headerShown: false }} />
        <Tab.Screen name="Equatorial" component={Equatorial} options={{ headerShown: false }} />
        <Tab.Screen name="ClimaTropical" component={ClimaTropical} options={{ headerShown: false }} />
        <Tab.Screen name="Tropical" component={Tropical} options={{ headerShown: false }} />
        <Tab.Screen name="ClimaSubTropical" component={ClimaSubtropical} options={{ headerShown: false }} />
        <Tab.Screen name="SubTropical" component={Subtropical} options={{ headerShown: false }} />
        <Tab.Screen name="ClimaTropicalAltitude" component={ClimaTropicalAltitude} options={{ headerShown: false }} />
        <Tab.Screen name="TropicalAltitude" component={TropicalAltitude} options={{ headerShown: false }} />
        <Tab.Screen name="ClimaSemiarido" component={ClimaSemiarido} options={{ headerShown: false }} />
        <Tab.Screen name="Semiarido" component={Semiarido} options={{ headerShown: false }} />
        <Tab.Screen name="AlimentoSolo" component={AlimentoSolo} options={{ headerShown: false }} />
        <Tab.Screen name="Solos" component={Solos} options={{ headerShown: false }} />
        <Tab.Screen name="SoloArenoso" component={SoloArenoso} options={{ headerShown: false }} />
        <Tab.Screen name="Arenoso" component={Arenoso} options={{ headerShown: false }} />
        <Tab.Screen name="SoloArgiloso" component={SoloArgiloso} options={{ headerShown: false }} />
        <Tab.Screen name="Argiloso" component={Argiloso} options={{ headerShown: false }} />
        <Tab.Screen name="SoloHumoso" component={SoloHumoso} options={{ headerShown: false }} />
        <Tab.Screen name="Humoso" component={Humoso} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}*/