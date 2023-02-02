import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prisma';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const data = await prisma.category.findMany({
   
        orderBy: {
            id: "desc"
        },
        
    });
     
        res.json(data);
    
}