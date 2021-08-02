import axios from 'axios';
export function getKits(){
 const request = axios.get('/api/clubkits').then(response=>response.data);
 return {
     type: 'GET_KITS',
     payload: request
 }
}

export function getInt(){
const request= axios.get('/api/intkits').then(response=>response.data);
return {
    type: 'GET_INT',
    payload: request
    }
}

export function getOthers(){
    const request = axios.get('/api/otherKits').then(response=>response.data);
    return {
        type: 'GET_OTHERS',
        payload: request
    }
}

export function clearKits(){
    return {
        type: 'CLEAR_KITS',
        payload: []
    }
}

export function clearInt(){
    return {
        type: 'CLEAR_INT',
        payload: []
    }
}