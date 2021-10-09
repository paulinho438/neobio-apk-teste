import AsyncStorage from '@react-native-async-storage/async-storage';
import mime from "mime";

// const baseUrl = 'https://api.b7web.com.br/devcond/api';
const baseUrl = 'https://api-neobio.paulopeixoto.com/api';

const request = async (method, endpoint, params, token = null) => {
    method = method.toLowerCase();
    let fullUrl = `${baseUrl}${endpoint}`;
    let body = null;

    switch(method) {
        case 'get':
            let queryString = new URLSearchParams(params).toString();
            fullUrl += `?${queryString}`;
        break;
        case 'post':
        case 'put':
        case 'delete':
            body = JSON.stringify(params);
        break;
    }

    let headers = {'Content-Type': 'application/json'};
    if(token) {
        headers.Authorization = `Bearer ${token}`;
    }

    let req = await fetch(fullUrl, { method, headers, body });
    let json = await req.json();
    return json;
}

export default {
    getToken: async () => {
        return await AsyncStorage.getItem('token');
    },
    validateToken: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', '/auth/validate', {}, token);
        return json;
    },
    login: async (cnpj_cpf, password) => {
        let json = await request('post', '/auth/login', {cnpj_cpf, password});
        return json;
    },
    logout: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', '/auth/logout', {}, token);
        await AsyncStorage.removeItem('token');
        return json;
    },
    register: async (nome_fantasia, email, cnpj_cpf, password, password_confirm, telefone2_numero, cep, endereco, telefone2_ddd, bairro, cidade, endereco_numero, estado, inscricao_estadual, contato) => {
        let json = await request('post', '/auth/registers', {
            nome_fantasia, email, cnpj_cpf, password, password_confirm, telefone2_numero, cep, endereco, telefone2_ddd, bairro, cidade, endereco_numero, estado, inscricao_estadual, contato
        });
        return json;
    },
    register2: async (name, email, cpf, password, passwordConfirm, telefone, cep, endereco, meuPerfil, crp, photo, meuPsicologo, minhaAbordagem, nascimento) => {
        

        let formData = new FormData();
        formData.append('nome', name);
        formData.append('email', email);
        formData.append('cpf', cpf);
        formData.append('password', password);
        formData.append('password_confirm', passwordConfirm);
        formData.append('cep', cep);
        formData.append('nascimento', nascimento);
        formData.append('endereco', endereco);
        formData.append('telefone', telefone);
        formData.append('tipoUsuario', meuPerfil);
        formData.append('crp', crp);
        formData.append('psicologo', meuPsicologo);
        formData.append('abordagem', minhaAbordagem);
        if(photo.uri){
            const newImageUri =  "file:///" + photo.uri.split("file:/").join("");
            formData.append('foto', {
                uri: newImageUri,
                type: mime.getType(newImageUri),
                name: newImageUri.split("/").pop()
            });
        }
        
        let req = await fetch(`${baseUrl}/auth/registers`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        });
        let json = await req.json();
        return json; 
    },
    enviarComprovante: async (id, arquivo) => {
        let token = await AsyncStorage.getItem('token');
        const newImageUri =  "file:///" + arquivo.uri.split("file:/").join("");

        let formData = new FormData();
        if(arquivo.uri){
            formData.append('arquivo', {
                uri: newImageUri,
                type: mime.getType(newImageUri),
                name: newImageUri.split("/").pop()
            });
        }
        
        let req = await fetch(`${baseUrl}/enviocomprovante/${id}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
            body: formData
        });
        let json = await req.json();
        return json; 
    },
    finalizarClient: async (id, duracao, complemento) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', '/myclient', {id, duracao, complemento}, token);
        return json;
    },
    setUpdateInfoCFoto: async (dias, dtInicio, dtFinal, photo, endereco, cep, telefone, nascimento) => {
        let token = await AsyncStorage.getItem('token');
        const newImageUri =  "file:///" + photo.uri.split("file:/").join("");
        let formData = new FormData();
        formData.append('dias', dias);
        formData.append('dtInicio', dtInicio);
        formData.append('dtFinal', dtFinal);
        formData.append('cep', cep);
        formData.append('nascimento', nascimento);
        formData.append('endereco', endereco);
        formData.append('telefone', telefone);
        if(photo.uri){
            formData.append('foto', {
                uri: newImageUri,
                type: mime.getType(newImageUri),
                name: newImageUri.split("/").pop()
            });
        }
        
        let req = await fetch(`${baseUrl}/setUpdateInfoCFoto`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
            body: formData
        });
        let json = await req.json();
        return json; 
    },
    setUpdateInfo: async (dias, dtInicio, dtFinal, endereco, cep, telefone, nascimento) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', '/setUpdateInfo', {dias, dtInicio, dtFinal, endereco, cep, telefone, nascimento}, token);
        return json;
    },
    getMeuCarrinho: async (produtos) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', '/meucarrinho', {produtos}, token);
        return json;
    },
    getCalcularFrete: async (produtos) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', '/calcularFrete', {produtos}, token);
        return json;
    },
    getMeusPedidos: async (produtos) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', '/meuspedidos', {}, token);
        return json;
    },
    enviarPedido: async (produtos) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', '/novopedido', {produtos}, token);
        return json;
    },
    getPsicologos: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', '/psicologos', {}, token);
        return json;
    },
    allProdutos: async () => {
        let json = await request('get', '/allprodutos', {});
        return json;
    },
    searchProdutos: async (search) => {
        let json = await request('post', '/searchprodutos', {search});
        return json;
    },
    getClientesFinanceiro: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', '/myclientsfinanceiro', {}, token);
        return json;
    },
    getInfoGeral: async (id) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', `/clientinfo/${id}`, {}, token);
        return json;
    },
    getWall: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', '/walls', {}, token);
        return json;
    },
    likeWallPost: async (id) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', `/wall/${id}/like`, {}, token);
        return json;
    },
    setPagamentoCliente: async (id, pagamento, dt_pagamento) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', `/clientpagamento/${id}`, {pagamento, dt_pagamento}, token);
        return json;
    },
    esqueci: async (email) => {
        let json = await request('post', `/esqueci`, {email});
        return json;
    },
    getDocs: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', '/docs', {}, token);
        return json;
    },
    getBillets: async () => {
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property);
        let json = await request('get', '/billets', {}, token);
        return json;
    },
    getWarnings: async () => {
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property);
        let json = await request('get', '/warnings', {}, token);
        return json;
    },
    addWarningFile: async (file) => {
        let token = await AsyncStorage.getItem('token');
        let formData = new FormData();
        formData.append('photo', {
            uri: file.uri,
            type: file.type,
            name: file.fileName
        });
        let req = await fetch(`${baseUrl}/warning/file`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
        let json = await req.json();
        return json;
    },
    addWarning: async (title, list) => {
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property);
        let json = await request('post', '/warning', {
            title,
            list
        }, token);
        return json;
    },
    getReservations: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', '/psicologosagenda', {}, token);
        return json;
    },
    getDisabledDates: async (id) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', `/reservation/${id}/disableddates`, {}, token);
        return json;
    },
    getReservationTimes: async (id, date) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', `/reservation/${id}/times`, {date}, token);
        return json;
    },
    setReservation: async (id, date, time, sessao) => {
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property);
        let json = await request('post', `/reservation/${id}`, {
            date,
            time,
            sessao
        }, token);
        return json;
    },
    setReservationSessao: async (id, date, time, sessao) => {
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property);
        let json = await request('post', `/reservationSessao/${id}`, {
            date,
            time,
            sessao
        }, token);
        return json;
    },
    saveHumor: async (humor, descricao) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', `/clienthumor`, {
            humor,
            descricao
        }, token);
        return json;
    },
    sendToken: async (token, id_usuario, tipoUsuario) => {
        let json = await request('post', '/token', {token, id_usuario, tipoUsuario});
        return json;
    },
    getMyReservations: async () => {
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property);
        let json = await request('get', '/myreservations', {}, token);
        return json;
    },
    getUserInfo: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', '/userinfo', {
        }, token);
        return json;
    },
    getMyHumor: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', '/myhumor', {
        }, token);
        return json;
    },
    getHumorClient: async (id) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', `/clienthumor/${id}`, {
        }, token);
        return json;
    },
    getClientesHumor: async (id) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', `/getclientes`, {
        }, token);
        return json;
    },
    removeReservation: async (id) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', `/deletemyreservation/${id}`, {}, token);
        return json;
    },
    removeHumor: async (id) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', `/deletemyhumor/${id}`, {}, token);
        return json;
    },
    getFoundAndLost: async () => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', `/foundandlost`, {}, token);
        return json;
    },
    setRecovered: async (id) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('put', `/foundandlost/${id}`, {
            status: 'recovered'
        }, token);
        return json;
    },
    addLostItem: async (photo, description, where) => {
        let token = await AsyncStorage.getItem('token');
        let formData = new FormData();
        formData.append('description', description);
        formData.append('where', where);
        formData.append('photo', {
            uri: photo.uri,
            type: photo.type,
            name: photo.fileName
        });
        let req = await fetch(`${baseUrl}/foundandlost`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
        let json = await req.json();
        return json;
    },
    getUnitInfo: async () => {
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property);
        let json = await request('get', `/unit/${property.id}`, {}, token);
        return json;
    },
    removeUnitItem: async (type, id) => {
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property);

        let json = await request('post', `/unit/${property.id}/remove${type}`, {
            id
        }, token);
        return json;
    },
    addUnitItem: async (type, body) => {
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property);

        let json = await request('post', `/unit/${property.id}/add${type}`, body, token);
        return json;
    }
};