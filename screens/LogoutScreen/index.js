import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

import { icons, COLORS, SIZES, FONTS } from '../../constants'
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
                        <Text style={{ ...FONTS.h3 }}>Sair</Text>
                    </View>
                </View>

                
            </View>
        )
    }

    const handleRegisterButton = async () => {
     
        
        let result = await api.logout();
        if(result.error === '') {
          
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
         
            <C.ButtonArea style={{marginTop: 200}} onPress={handleRegisterButton}>
                <C.ButtonText>SAIR</C.ButtonText>
            </C.ButtonArea>
        </C.Container>
    );
}