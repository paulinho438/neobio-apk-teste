import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';


import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';

import { useStateValue } from '../contexts/StateContext';

import { LayoutAnimation, Platform, UIManager, View, Text, Image, Animated } from 'react-native';

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
    justify-content: space-between;
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
        <Box
            style={{margin:5, padding:10, borderRadius:10}}
        >
            <HeaderArea>
                <InfoArea >
                    <InfoAreaBox style={{flexDirection: 'row'}}>
                        <Image source={{uri: data.infoProduto[0].url_imagem}} style={{width:50, height:50, borderColor: '#CDCDD2', borderWidth: 1}} resizeMode="cover" />
                        <Date style={{flex:1, marginLeft: 10}}>{data.infoProduto[0].descricao}</Date>
                    </InfoAreaBox>
                    <InfoAreaBox style={{flexDirection: 'row'}}>
                        <Date style={{flex:1, marginTop: 10}}>Quantidade: {data.qt}</Date>
                    </InfoAreaBox>
                </InfoArea>

            </HeaderArea>
          
           
        </Box>
    );
}