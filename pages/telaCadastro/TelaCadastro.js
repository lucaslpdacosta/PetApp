
import { Text, View, TextInput, TouchableOpacity, Image, Switch } from 'react-native';
import styles from '../../css/css.js';


export default function TelaCadastro({ navigation }) {
    return (

        <View style={styles.container2}>

            <View style={styles.boasVindas2}>

                <Image
                    source={require('../../assets/icon-pets.jpg')}
                    resizeMode='contain'
                />

                <Text style={styles.mensagem2}>A</Text>

            </View>

            <View style={styles.alinhamentoCentro2}>

                <TextInput style={styles.textI2}
                    keyboardType="email-address"
                    placeholder='E-mail'
                    placeholderTextColor='blue'

                />

                <TextInput style={styles.textI2}
                    keyboardType="default"
                    placeholder='Senha'
                    placeholderTextColor='gray'
                    secureTextEntry={true}
                />

                <Switch>


                </Switch>


                <TouchableOpacity style={styles.botaoAcessar2}>
                    <Text style={styles.textoBotaoAcessar2}>Acessar</Text>
                </TouchableOpacity>


            </View>

            <View style={styles.botoesNovaContaEEsqueceuSenha2}>

                <TouchableOpacity>
                    <Text style={styles.botaoEsqueceuSenha2}>Esqueci a senha</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("TelaCadastro")
                    }}
                    style={styles.buttonsNavgations}>
                    <Text style={styles.botaoCadastrar2}>Criar nova conta</Text>
                </TouchableOpacity>


            </View>

        </View>
    );
}

