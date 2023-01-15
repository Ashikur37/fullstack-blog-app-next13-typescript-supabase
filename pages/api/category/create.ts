import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prisma';
import slug from 'slug';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const data=   await prisma.category.create({
        data:{
            name:req.body.name,
            slug:slug(req.body.name),
            parentId:req.body.parent_id?req.body.parent_id:null,
          
            
        }
     })
     res.json(data);
}