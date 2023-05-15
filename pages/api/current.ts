import { NextApiRequest, NextApiResponse } form 'next';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method != 'GET') {
        return  res.status(400). end();
    }
    try {
        const { currentUser } = await serverAuth(req);
        return res.status(405).end();
        
    } catch (error) {
        console.log(error);
        return res.status(400).end()
    }
}