import axios from 'axios';

const api=axios.create({baseURL:process.env.APIURL,headers:{'x-acess-token':process.env.APIKEY}});

export async function getCoins() {
    const response = await api.get('coins');
    return response;
}