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