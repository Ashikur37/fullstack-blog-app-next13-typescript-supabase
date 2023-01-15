import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../utils/prisma';
import slug from 'slug';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const data=   await prisma.post.create({
        data:{
            title:req.body.title,
            slug:slug(req.body.title),
            image:req.body.image,
            description:req.body.description,
            metaDescription:req.body.description,

        }
     })
     res.revalidate('/');
     res.json(data);
}