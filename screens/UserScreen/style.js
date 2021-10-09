import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #F5F6FA;
        justify-content:center;
        align-items: center;
    `,
    Box: styled.View`
        width:110%;
        padding: 100px;
        transform: rotate(-15deg);
    `,
    BoxFix: styled.View`
        transform: rotate(15deg);
        align-items: center;

    `,
    Logo: styled.Image`
    
        width: 60px;
        height: 60px;
        margin-right:15px;
        margin-bottom:15px;
        
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