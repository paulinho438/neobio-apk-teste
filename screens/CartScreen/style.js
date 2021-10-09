import styled from 'styled-components/native';

import { icons, COLORS, SIZES, FONTS } from '../../constants/'

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #F5F6FA;
        padding-bottom: 60px;
    `,
    Box: styled.View`
        
    `,
    LoadingIcon: styled.ActivityIndicator``,
    ValorArea:styled.View`

        background-color: #FFF;
        display: flex;
        align-content: space-between;
        justify-content: space-between;
        margin-left: 20px;
        margin-right: 20px;
        background-color: #F8F8F9;
        border-color: #CDCDD2;
        border-width: 1px;
        padding:20px;
    `,
    ValorAreaText: styled.Text`
    `,
    CheckBoxesTermos: styled.View`
  
    width:100%;
    flex-direction: row;
    align-items: center;
    text-decoration-line: none;

    `,
    Termos: styled.View`
    `,
    QtProdutos: styled.Text`
        color: ${COLORS.black};
        font-size: 18px;
        margin:20px;
    `,
    ProdutoContainer: styled.ScrollView`
    flex: 1;
    `,
    Logo: styled.Image`
    
        width: 60px;
        height: 60px;
        margin-right:15px;
        margin-bottom:15px;
        
    `,
    List: styled.FlatList`
        
    `,
    Field: styled.TextInput`
        border-width: 1px;
        border-color: #a3195b;
        background-color: transparent;
        placeholder-text-color=#a3195b;
        width: 300px;
        border-radius: 8px;
        color: #a3195b;
        font-size: 15px;
        padding: 15px;
        margin-bottom: 15px;
    `,
    ButtonArea: styled.TouchableOpacity`
        background-color: #a3195b;
        width: 300px;
        padding: 20px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        margin-bottom: 15px;
    `,
    ButtonText: styled.Text`
        color: #fff;
        font-size: 16px;
        font-weight: bold;
    `,
    ButtonFrete: styled.TouchableOpacity`
        background-color: #218838;
        width:130px;
        padding: 10px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        margin-bottom: 15px;
    `,
    ButtonFreteText: styled.Text`
        color: #fff;
        font-size: 14px;
        font-weight: bold;
    `,
    Info1: styled.Text`
        margin-bottom: 20px;
        color: #a3195b;
        font-size: 20px;
        font-weight: 800;
    `,
    Info2: styled.Text`
        color: #808080;
    `,
    Info2Subli: styled.Text`
        color: #a3195b;
        text-decoration: underline;
    `,
    LogoContainer: styled.View`
    width: 100%;
    position: absolute;
    bottom:0;
    align-items: flex-end;
    `,
    InfoBox: styled.TouchableOpacity`
    flex-direction: row;
    `,
};