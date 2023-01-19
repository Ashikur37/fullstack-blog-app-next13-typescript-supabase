import { cache } from 'react';
import 'server-only';
import { prisma } from './prisma';

export const preload = () => {
  void getPosts();
}

export const getPosts = cache(async () => {
    const data = await prisma.post.findMany({
   
        orderBy: {
            id: "desc"
        },
        
    });
     setTimeout(function(){
        return data;
     },5000)
     
});
