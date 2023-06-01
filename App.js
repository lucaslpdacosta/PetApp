
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './pages/telaLogin/telaLogin.js';
import TelaCadastro from './pages/telaCadastro/TelaCadastro.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="LoginSenha"
          component={TelaLogin}
          options={{ title: 'Tela Login', headerShown: false }}
        />

        <Stack.Screen
          name="TelaCadastro"
          component={TelaCadastro}
          options={{ title: 'TelaCadastro', headerShown: false }}
        />



      </Stack.Navigator>
    </NavigationContainer>

  );
}