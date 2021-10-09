import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import DatePicker from 'react-native-datepicker'
import { TextInputMask } from 'react-native-masked-text';
import C from './style';

import CheckBox from '@react-native-community/checkbox';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';
import { useSafeArea } from 'react-native-safe-area-context';

import { icons, COLORS, SIZES, FONTS } from '../../constants/'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    ScrollView,
    FlatList,
    Alert
} from "react-native";

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    

    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [telefoneDDD, setTelefoneDDD] = useState('');
    const [bairro, setBairro] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [endereco, setEndereco] = useState('');
    const [casa, setCasa] = useState('');
    const [estado, setEstado] = useState('');
    const [email, setEmail] = useState('');
    const [inscricaoEstadual, setInscricaoEstadual] = useState('');
    const [contato, setContato] = useState('');
    const [termos, setTermos] = useState(false);


    

  

    

    
    

        

        const getAllPsicologos = async () => {
            setList([]);
            const result = await api.getPsicologos();
            if(result.error === '') {
                setList(result.list);
            } else {
                alert(result.error);
            }
        }
   

    const selectTipoUsuario = (item) => {
        if(item == '1'){
            setTerapeutizando(true);
            setGestor(false);
            setPsicologo(false);
        }else if(item == '2'){
            setTerapeutizando(false);
            setGestor(true);
            setPsicologo(false);
        }else{
            setTerapeutizando(false);
            setGestor(false);
            setPsicologo(true);
        }
    }

    function renderHeader() {
        

        return (
            <View style={{ flexDirection: 'row', marginTop: 40 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                {/* Restaurant Name Section */}
                <View
                    style={{
                        flex: 3,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 15,
                        marginRight: 15,
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>Cadastro</Text>
                    </View>
                </View>

                
            </View>
        )
    }

    const handlePoliticaButton = () => {
        navigation.navigate('Politica');
    }

    const handleRegisterButton = async () => {
        if(!termos) {
            Alert.alert('Atenção!', 'Para continuar é necessário aceitar os termos!', [
                {text: 'Fechar'}
            ]);
            return false;
        }
        
        if(!nomeFantasia || !email || !cpfCnpj || !password || !passwordConfirm || !telefone || !cep || !endereco || !telefoneDDD || !bairro || !cidade || !casa || !estado || !inscricaoEstadual || !contato) {
            Alert.alert('Atenção!', 'Preencha todos os campos', [
                {text: 'Fechar'}
            ]);
            return false;
        }
        let cpfcnpjNovo = '';
        // if(cpfCnpj.length == 14){
        //     cpfcnpjNovo = cpfCnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        // }else if(cpfCnpj.length == 11){
        //     cpfcnpjNovo = cpfCnpj.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        // }else{
        //     Alert.alert('Atenção!', 'Digite o CPF ou CNPJ válido!', [
        //         {text: 'Fechar'}
        //     ]);
        //     return false;
        // }

        if(cpfCnpj.length == 14){
            cpfcnpjNovo = cpfCnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        }else{
            Alert.alert('Atenção!', 'Digite um CNPJ válido!', [
                {text: 'Fechar'}
            ]);
            return false;
        }
        
       
        
        let result = await api.register(nomeFantasia, email, cpfcnpjNovo, password, passwordConfirm, telefone, cep, endereco, telefoneDDD, bairro, cidade, casa, estado, inscricaoEstadual, contato);
        if(result.error === '') {
            Alert.alert('Sucesso!', `Usúario criado com sucesso, quando ele for ativado você receberá um e-mail! OBS ALTERAR ESSA MENSAGEM !`, [
                {text: 'Fechar'}
            ]);
            navigation.reset({
                index: 1,
                routes:[{name: 'Login'}]
            });
        } else {
            Alert.alert('Atenção!', `${result.error}`, [
                {text: 'Fechar'}
            ]);
        }
        
    }

    return (
        <C.Container>
            {renderHeader()}
            <C.Field
                placeholder="Digite a Razão Social"
                placeholderTextColor="black"
                value={nomeFantasia}
                onChangeText={t=>setNomeFantasia(t)}
            />
            <C.Field
                placeholder="Digite seu CNPJ"
                placeholderTextColor="black"
                keyboardType="numeric"
                value={cpfCnpj}
                onChangeText={t=>setCpfCnpj(t)}
            />
            <C.Field
                placeholder="Digite a Inscrição Estadual"
                placeholderTextColor="black"
                value={inscricaoEstadual}
                onChangeText={t=>setInscricaoEstadual(t)}
            />
            <C.Field
                placeholder="Digite o Nome do Representante"
                placeholderTextColor="black"
                value={contato}
                onChangeText={t=>setContato(t)}
            />
            <C.Field
                placeholder="Digite seu E-mail"
                placeholderTextColor="black"
                value={email}
                onChangeText={t=>setEmail(t)}
            />
            <C.Field
                placeholder="DDD"
                placeholderTextColor="black"
                value={telefoneDDD}
                onChangeText={t=>setTelefoneDDD(t)}
            />
            <C.Field
                placeholder="Telefone"
                placeholderTextColor="black"
                value={telefone}
                onChangeText={t=>setTelefone(t)}
            />
            <C.Field
                placeholder="CEP"
                placeholderTextColor="black"
                value={cep}
                onChangeText={t=>setCep(t)}
            />
            <C.Field
                placeholder="Bairro"
                placeholderTextColor="black"
                value={bairro}
                onChangeText={t=>setBairro(t)}
            />
            <C.Field
                placeholder="Cidade"
                placeholderTextColor="black"
                value={cidade}
                onChangeText={t=>setCidade(t)}
            />
            <C.Field
                placeholder="Endereco"
                placeholderTextColor="black"
                value={endereco}
                onChangeText={t=>setEndereco(t)}
            />
            <C.Field
                placeholder="Casa/Apt"
                placeholderTextColor="black"
                value={casa}
                onChangeText={t=>setCasa(t)}
            />
            <C.Field
                placeholder="Estado"
                placeholderTextColor="black"
                value={estado}
                onChangeText={t=>setEstado(t)}
            />
        
            <C.Field
                placeholder="Digite sua Senha"
                secureTextEntry={true}
                placeholderTextColor="black"
                value={password}
                onChangeText={t=>setPassword(t)}
            />
            <C.Field
                placeholder="Digite sua Senha novamente"
                secureTextEntry={true}
                placeholderTextColor="black"
                value={passwordConfirm}
                onChangeText={t=>setPasswordConfirm(t)}
            />

          
            <C.CheckBoxesTermos>
                <CheckBox
                    disabled={false}
                    value={termos}
                    tintColors={{ true: '#2196F3' }}
                    onValueChange={() => setTermos(!termos)}
                />
                <C.Termos>
                    <Text>Li e aceito os <Text onPress={handlePoliticaButton} style={{fontWeight:'bold', color:'#2196F3'}}>Termos e Condições de Uso</Text> e a <Text onPress={handlePoliticaButton} style={{fontWeight:'bold', color:'#2196F3'}} >Política de Privacidade.</Text></Text>
                </C.Termos>
            </C.CheckBoxesTermos>
           
            

            <C.ButtonArea style={{marginBottom: 50}} onPress={handleRegisterButton}>
                <C.ButtonText>Enviar Pré-cadastro</C.ButtonText>
            </C.ButtonArea>
        </C.Container>
    );
}