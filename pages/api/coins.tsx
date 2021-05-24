import { NextApiRequest, NextApiResponse } from 'next';
import {api} from '.';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    try{
        
        const {data,headers} = await api.get('coins');
        return res.status(200).send({data,headers});
    } catch (error) {
        return res.status(error.status || 500).send(error.message);
    }
}