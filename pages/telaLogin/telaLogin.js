
import { Text, View, TextInput, TouchableOpacity, Image, Switch } from 'react-native';
import styles from '../../css/css.js';


export default function TelaLogin({ navigation }) {
    return (

        <View style={styles.container}>

            <View style={styles.boasVindas}>

                <Image
                    source={require('../../assets/icon-pets.jpg')}
                    resizeMode='contain'
                />

                <Text style={styles.mensagem}>Acessar conta:</Text>

            </View>

            <View style={styles.alinhamentoCentro}>

                <TextInput style={styles.textI}
                    keyboardType="email-address"
                    placeholder='E-mail'
                    placeholderTextColor='gray'

                />

                <TextInput style={styles.textI}
                    keyboardType="default"
                    placeholder='Senha'
                    placeholderTextColor='gray'
                    secureTextEntry={true}
                />

                <Switch>


                </Switch>


                <TouchableOpacity style={styles.botaoAcessar}>
                    <Text style={styles.textoBotaoAcessar}>Acessar</Text>
                </TouchableOpacity>


            </View>

            <View style={styles.botoesNovaContaEEsqueceuSenha}>

                <TouchableOpacity>
                    <Text style={styles.botaoEsqueceuSenha}>Esqueci a senha</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("TelaCadastro")
                    }}
                    style={styles.buttonsNavgations}>
                    <Text style={styles.botaoCadastrar}>Criar nova conta</Text>
                </TouchableOpacity>


            </View>

        </View>
    );
}

