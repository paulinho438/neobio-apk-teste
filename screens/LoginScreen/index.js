import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';



export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginButton = async () => {
            if(cpf && password) {
                let cpfcnpjNovo = '';
                if(cpf.length == 14){
                    cpfcnpjNovo = cpf.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
                }else if(cpf.length == 11){
                    cpfcnpjNovo = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
                }else{
                    cpfcnpjNovo = cpf;
                }
            let result = await api.login(cpfcnpjNovo, password);
            if(result.error === '') {
                dispatch({type: 'setToken', payload: {token: result.token}});
                dispatch({type: 'setUser', payload: {user: result.user}});

                navigation.reset({
                    index: 1,
                    routes:[{name: 'Home'}]
                });
            } else {
                alert(result.error);
            }
        } else {
            alert("Preencha os campos");
        }
    }

    const handleRegisterButton = () => {
        navigation.navigate('Register');
    }

    const handleEsqueciButton = () => {
        // navigation.navigate('EsqueciScreen');
    }

    return (
        <C.Container>
            <C.Box>
                <C.BoxFix>
                    <C.Logo
                        source={require('../../assets/images/neobio.png')}
                        resizeMode="contain"
                    />
                    <C.Info1>Bem Vindo(a)!</C.Info1>

                    <C.Field
                        placeholder="Digite seu CNPJ"
                        keyboardType="numeric"
                        placeholderTextColor='#a3195b'
                        value={cpf}
                        onChangeText={t=>setCpf(t)}
                    />
                    <C.Field
                        placeholder="Digite sua Senha"
                        secureTextEntry={true}
                        placeholderTextColor='#a3195b'

                        value={password}
                        onChangeText={t=>setPassword(t)}
                    />

                    <C.ButtonArea onPress={handleLoginButton}>
                        <C.ButtonText>ENTRAR</C.ButtonText>
                    </C.ButtonArea>

                    {/* <C.ButtonArea onPress={handleRegisterButton}>
                        <C.ButtonText>CADASTRAR-SE</C.ButtonText>
                    </C.ButtonArea> */}
                    <C.InfoBox style={{marginTop:20}} onPress={handleRegisterButton}>
                        <C.Info2>Ainda não se registrou? </C.Info2><C.Info2Subli>Clique aqui</C.Info2Subli>
                    </C.InfoBox>
                    <C.InfoBox style={{marginTop:20}} onPress={handleEsqueciButton}>
                        <C.Info2 style={{color:'#a3195b'}}>Esqueci minha senha</C.Info2>
                    </C.InfoBox>
                </C.BoxFix>
            </C.Box>
            <C.LogoContainer>
            <C.Logo
                    // source={require('../../assets/iconeclinica.png')}
                    resizeMode="contain"
                    width={50}
                />
                </C.LogoContainer>
        </C.Container>
    );
}