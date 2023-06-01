
import {View} from 'react-native';
import TelaLogin from './pages/telaLogin/telaLogin.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaLogin from './pages/telaLogin/telaLogin.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View>
        
        <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen
            name="LoginSenha"
            component={TelaLogin}
            options={{title: 'Tela Login'}}
        />

       

        </Stack.Navigator>
        </NavigationContainer>

    </View> 
  );
}

