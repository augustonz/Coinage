import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const api=axios.create({baseURL:process.env.NEXT_PUBLIC_APIURL,headers:{'x-access-token':process.env.NEXT_PUBLIC_APIKEY}});



export default function handler(req:NextApiRequest, res:NextApiResponse) {
    res.status(200).json({ text: 'This is the api' });
}

export {api};