import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    token: '',
    user: {},
    produtos: []
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case 'setToken':
            AsyncStorage.setItem('token', action.payload.token);
            return {...state, token: action.payload.token};
        break;
        case 'setUser':
            return {...state, user: action.payload.user};
        break;
        case 'setProdutos':
            return {...state, produtos: action.payload.produtos};
        break;
        
    }

    return state;
};