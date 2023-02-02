// const { pid } = req.query
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prisma';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const { slug } = req.query
    const data = await prisma.category.findFirst({
        include:{
            posts:true
        },
        where:{
            slug:slug as string
        }
    });
     
        res.json(data);
    
}