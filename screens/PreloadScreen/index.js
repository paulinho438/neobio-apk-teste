import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';




import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();


    useEffect(()=>{
        const checkLogin = async () => {
           

            let token = await api.getToken();
            if(token) {
                try {
                    let result = await api.validateToken();
                    if(result.error === '') {
                        dispatch({
                            type: 'setUser',
                            payload: {
                                user: result.user
                            }
                        });
    
                        navigation.reset({
                            index: 1,
                            routes:[{name: 'Home'}]
                        });
                    } else {
                        alert(result.error);
                        dispatch({type:'setToken', payload: {token: ''}});
                        navigation.reset({
                            index: 1,
                            routes:[{name: 'Login'}]
                        });
                    }
                } catch (error) {
                    navigation.reset({
                        index: 1,
                        routes:[{name: 'Login'}]
                    });
                }
            } else {
                navigation.reset({
                    index: 1,
                    routes:[{name: 'Login'}]
                });
            }
        }

        checkLogin();
    }, []);

    return (
        <C.Container>
            <C.LoadingIcon color="#3795d2" size="large" />
        </C.Container>
    );
}