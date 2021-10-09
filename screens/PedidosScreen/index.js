import React, { useEffect, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import C from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

import PedidosItens from '../../components/PedidosItens';

import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    ScrollView,
    FlatList
} from "react-native";

import { isIphoneX } from 'react-native-iphone-x-helper'

import { icons, COLORS, SIZES, FONTS } from '../../constants/'

const Box = styled.View`
    background-color: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const HeaderArea = styled.View`
    flex-direction: row;
    align-items: center;
`;
const InfoArea = styled.View`
    flex: 1;
    flex-direction:row;
`;
const Title = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #000;
`;
const Date = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #9C9DB9;
`;

const Body = styled.Text`
    font-size: 15px;
    color: #000;
    margin: 15px 0;
`;

const InfoAreaBox = styled.View`
    padding:15px;
    border-bottom-width:1px;
    border-color: #ccc;
`;

const FooterArea = styled.View`
    flex-direction: row;
    align-items: center;
`;
const LikeButton = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
`;
const LikeText = styled.Text`
    margin-left: 5px;
    font-size: 13px;
    color: #9C9DB9;
`;

const ButtonMostrarMais = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
    border-top-width:1px;
    border-color: #ccc;
    padding:10px;

`;

const CoverImage = styled.Image`
    background-color: #fff;
    height: 50px;
    width: 50px;
    border-radius: 15px;
`;
const Picker = styled.Picker``;

const MostrarBox = styled.View`
    padding:15px;
    flex-direction:row;
    justify-content: space-between;
`;

const ButtonArea = styled.TouchableOpacity`
        background-color: #28a745;
        padding: 12px;
        width:100%;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        
`;
const ButtonText = styled.Text`
        color: #FFF;
        font-size: 15px;
        font-weight: bold;
`;

const MostrarBoxItem = styled.View`

`;

const MostrarBoxItemText = styled.Text`

`;

const FieldCampo = styled.View`
        background-color: #f2f2f2;
        border-radius: 50px;
        color: #000;
        font-size: 15px;
        padding-left: 19px;
        padding-right: 19px

        
        margin-top: 5px;
    `;



export default () => {
    const [likeCount, setLikeCount] = useState();
    const [liked, setLiked] = useState();
    const [list, setList] = useState([]);

    const [carrinho, setCarrinho] = useState([])
    const [valortotal, setValorTotal] = useState(0.00)
    const [testSelected, setTestSelected] = useState([])

    const [pago, setPago] = useState(false);
    const [naoPago, setNaoPago] = useState(false);

    const [dataPagamento, setDataPagamento] = useState('');
    const [loading, setLoading] = useState(false);
    
    const getMeuCarrinho = async () => {
        setLoading(true);
        setCarrinho([]);

       
            let res = await api.getMeusPedidos();
            
            if(res.error == '') {
                console.log(res);
                setCarrinho(res.pedidos);
            } else {
                alert("Erro: "+res.error);
            }
    
       
        setLoading(false);

        
    }

    const handleConcluirPedido = async () => {
        

        let carrinhoContext = context.user.produtos;
        if(carrinhoContext.length > 0){
            let stringCarrinho = '';
            for(let q=0; q<carrinhoContext.length; q++){
                let produtoFor = carrinhoContext[q][0];
                let quantidadeFor = carrinhoContext[q][1];
                stringCarrinho = `${stringCarrinho},${produtoFor}:${quantidadeFor}`;
            }
            stringCarrinho = stringCarrinho.substr(1);
            let res = await api.enviarPedido(stringCarrinho);
            if(res.error == '') {
                alert('Pedido enviado com sucesso, aguarde ... OBS ESCOLHER A FRASE QUE SERA MOSTRADA PARA O CLIENTE.');
                dispatch({type: 'setProdutos', payload: {produtos: []}});
                setValorTotal(0.0);
                setCarrinho([]);
            } else {
                alert("Erro: "+res.error);
            }
    
        }else{
            setValorTotal(0.0);
        }
        setLoading(false);

        
    }

    useFocusEffect(
        React.useCallback(() => {
            getMeuCarrinho();
        }, [])
    );

    const handleMostrar = (id) => {
        let selecionados = [];

        selecionados = testSelected;
        let exist = false;
        for(let q=0; q<selecionados.length; q++){
            if(selecionados[q] == id){
                selecionados.splice(q, 1);
                exist = true;
            }
        }
        if(!exist){
            selecionados.push(id);
        }
        setTestSelected(selecionados);
    }
    
   
  

    

    
    const handlePagamentoButton = async () => {
        
        if(pago || naoPago){
            if(pago && dataPagamento === ''){
                alert('Digite a data do pagamento');
                return false;
            }
                var isPago = '';
                if(pago){
                    isPago = '1';
                }else{
                    isPago = '2';
                }
                // const result = await api.setPagamentoCliente(data.id, isPago, dataPagamento);
                // if(result.error === '') {
                //     alert('Pagamento atualizado com Sucesso!');
                //     thisRefresh();
                // } else {
                //     alert(result.error);
                // }
        }else{
            alert('Selecione se foi pago ou Não');
        }
        
    }
    
    const setPagamento = (item) => {
        if(item == '1'){
            setPago(true);
            setNaoPago(false);
        }else{
            setNaoPago(true);
            setPago(false);
        }
    }


    function renderProdutosList() {
    const [mostrar, setMostrar] = useState(false);
    const [idProdutoMostrar, setIdProdutoMostrar] = useState([]);
    
   
        const renderItem = ({ item, setSelected }) => (
            
            <Box
            style={(testSelected?.indexOf(item) > -1) ? {height:380} : {height:110}}
        >
            
            <HeaderArea>
                <InfoArea>
                    <InfoAreaBox style={{flex:1}}>
                        <Title>nome</Title>
                        <Date>date</Date>
                    </InfoAreaBox>
                    <InfoAreaBox style={{width:120, alignItems: 'flex-end'}}>
                        {1 == 1 && 
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Date style={{marginLeft: 5, color: '#c82333'}}>Pendente</Date>
                        </View>
                        }
                        {1 != 1 && 
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Concluido width="15" height="15" fill='#5cb85c'/>
                            <Date style={{marginLeft: 5, color: '#5cb85c'}}>Concluido</Date>
                        </View>
                        }
                    </InfoAreaBox>
                    {/* <Date>Duração:{data.duracao}</Date>
                    <Picker 
                    
                    >
                        <Picker.Item label="Pago?" value="" />
                    
                        <Picker.Item label="Sim" value="Sim" />
                        <Picker.Item label="Não" value="Não" />
                    
                        
                    
                    </Picker> */}

                </InfoArea>

            </HeaderArea>
            {(testSelected?.indexOf(item) > -1) && 
                <MostrarBox>

                    <MostrarBoxItem>
                    <MostrarBoxItemText>Valor:</MostrarBoxItemText>
                    <MostrarBoxItemText>Status:</MostrarBoxItemText>
                    </MostrarBoxItem>

                    <MostrarBoxItem style={{alignItems: 'flex-end'}}>
                        <MostrarBoxItemText>R$ valor</MostrarBoxItemText>
                        {1 == 1 && 
                        <MostrarBoxItemText>{1 == 1 ? 'Pago' : 'Não Pago'}</MostrarBoxItemText>
                        }
                        {1 != 1 && 
                        <MostrarBoxItemText>Pendente</MostrarBoxItemText>
                        }
                       
                        <View style={{flexDirection: 'row'}}>
                        
                        </View>
                        <FieldCampo>
                        <TextInputMask
                            type={'datetime'}
                            options={{
                              format: 'DD/MM/YYYY'
                            }}
                            color='#000'
                            placeholder='Data do pagamento'
                            placeholderTextColor="black"

                            value={dataPagamento}
                            onChangeText={(t)=>setDataPagamento(t)}
                            />
                        </FieldCampo>
                        <View style={{

                        }}>
                            <ButtonArea style={{width: 200}} onPress={handlePagamentoButton}>
                                <ButtonText>Salvar</ButtonText>
                            </ButtonArea>
                        </View>
                        
                    </MostrarBoxItem>
                    
                </MostrarBox>
            }
            <ButtonMostrarMais onPress={() => setSelected(item)}>
                    <Text>botao</Text>
            </ButtonMostrarMais>
            
           
        </Box>
        )

        return (
            <FlatList
                data={restaurants}
                setSelected={handleMostrar}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
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
                        <Text style={{ ...FONTS.h3 }}>Meus Pedidos</Text>
                    </View>
                </View>

                
            </View>
        )
    }

    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    

    const handleRegisterButton = () => {
        navigation.navigate('RegisterScreen');
    }

    const handleEsqueciButton = () => {
        navigation.navigate('EsqueciScreen');
    }

    

    return (
        <C.Container>
            {renderHeader()}
            <C.Box>
                <C.QtProdutos>{carrinho.length == 1 ? carrinho.length+' Pedido':carrinho.length+' Pedidos'}</C.QtProdutos>
            </C.Box>
            <View style={{paddingBottom:180}}>
                <C.List
                data={carrinho}
                // onRefresh={getInfoGeral}
                // refreshing={loading}
                renderItem={({item})=><PedidosItens data={item}/>}
                keyExtractor={(item)=>item.id.toString()}
                />
            </View>
            
        </C.Container>
    );
    
}