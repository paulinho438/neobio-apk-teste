import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';


import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';

import { useStateValue } from '../contexts/StateContext';

import { LayoutAnimation, Platform, UIManager, View, Text, Image, Animated, FlatList } from 'react-native';

import ProdutosPedidoIten from './ProdutosPedidoIten';

import api from '../services/api';
import { useSafeArea } from 'react-native-safe-area-context';
import { CheckBox, Button, Overlay } from 'react-native-elements';

// import Pendente from '../assets/pendente.svg';
// import Concluido from '../assets/concluido.svg';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

const Box = styled.TouchableOpacity`
    background-color: #FFF;
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
    color: #1E1F20;
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
    
`;

const ButtonArea = styled.TouchableOpacity`
        background-color: #3795d2;
        padding: 10px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
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

export default ({data, onPressDelete}) => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();
    const [likeCount, setLikeCount] = useState();
    const [liked, setLiked] = useState();
    const [mostrar, setMostrar] = useState(false);
    const [list, setList] = useState([]);

    const [pago, setPago] = useState(false);
    const [naoPago, setNaoPago] = useState(false);

    const [dataPagamento, setDataPagamento] = useState('');
   
    
    const handleMostrar = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setMostrar(!mostrar);
    }

    // useEffect(()=>{
    //     if(data.pagamento == '1'){
    //         setPago(true);
    //         setDataPagamento(data.dt_pagamento);

    //     }else if(data.pagamento == '2'){
    //         setNaoPago(true);
    //     }
        
    // },[]);

    const handleLike = async () => {
        setLiked(!liked);
        const result = await api.likeWallPost(data.id);
        if(result.error === '') {
            setLikeCount( result.likes );
            setLiked( result.liked );
        } else {
            alert(result.error);
        }
    }
    // const handlePagamentoButton = async () => {
    //     let produtosCarrinho = [];
    //     produtosCarrinho = context.user.produtos;
        
    //     if(produtosCarrinho.length != 0){
    //         for(let q=0; q < produtosCarrinho.length; q++){
    //             if(produtosCarrinho[q][0] == data.codigo_produto){
    //                 produtosCarrinho.splice(q, 1);
    //                 alert('Produto retirado do carrinho!')
    //                 navigation.reset({
    //                     routes:[{name:'Cart'}]
    //                 });
    //             }
    //         }

          
    //         dispatch({type: 'setProdutos', payload: {produtos: produtosCarrinho}});
    //     }else{
    //         alert('Error')
    //     }
        
        
    // }
    
    const setPagamento = (item) => {
        if(item == '1'){
            setPago(true);
            setNaoPago(false);
        }else{
            setNaoPago(true);
            setPago(false);
        }
    }



    return (
        <Box onPress={handleMostrar}
            style={mostrar === true ? {height:380} : {height:110}}
            style={{margin:5, backgroundColor: '#F8F8F9', borderLeftColor: '#CDCDD2', borderRightColor: '#CDCDD2', borderTopColor: '#CDCDD2', borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1}}
        >
            <HeaderArea>
                <InfoArea>
                    <InfoAreaBox style={{flex:3, flexDirection: 'column'}}>
                        {/* <Image source={{uri: data.img}} style={{width:50, height:50, borderColor: '#CDCDD2', borderWidth: 1}} resizeMode="cover" /> */}
                        <Date style={{flex:1, marginLeft: 10, marginBottom:10}}>Pedido n° {data.pedido.codigo_pedido}</Date>
                        <Date style={{flex:1, marginLeft: 10, marginBottom:10}}>Data: {data.pedido.dateCreate}</Date>
                        <Date style={{flex:1, marginLeft: 10}}>Status do pedido: {data.pedido.status}</Date>
                    </InfoAreaBox>
                    <InfoAreaBox style={{width:100, alignItems: 'flex-end',}}>
                    <View style={{position:'absolute', top:13, right:27, justifyContent:'center', alignItems: 'center'}}>
                            {!mostrar && 
                            <Date style={{color: '#c82333', fontSize:18}}>+ info</Date>
                            }
                            {mostrar && 
                            <Date style={{color: '#c82333', fontSize:18}}>- info</Date>
                            }
                        </View>
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
            {mostrar && 
                <MostrarBox>
                    {data.produtos.length == 0 && 
                    <Text>Nenhuma informação disponível</Text>
                    }
                    <View style={{width:'100%'}}>
                        <FlatList
                        data={data.produtos}
                        // onRefresh={getInfoGeral}
                        // refreshing={loading}
                        renderItem={({item})=><ProdutosPedidoIten data={item}/>}
                        keyExtractor={(item)=>item.id.toString()}
                        />
                    </View>

                    
                    
                </MostrarBox>
            }
            {/* <ButtonMostrarMais onPress={handleMostrar}>
                <Text>botao</Text>
            </ButtonMostrarMais> */}
            
           
        </Box>
    );
}