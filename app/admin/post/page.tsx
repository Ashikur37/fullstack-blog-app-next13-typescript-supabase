import Image from 'next/image';
import Link from 'next/link';
import ActionButton from './ActionButton';
import { prisma } from '../../../utils/prisma';
import CloudinaryImage from '../../../components/CloudinaryImage';


// export const revalidate = 120;
async function PostList({ params, searchParams }: any) {

    const posts = await prisma.post.findMany({
        where: {
            title: {
                contains: searchParams.key || "",
            }
        },
        orderBy: {
            id: "desc"
        },
        
    });

    return (

        <div className="p-8">
            <Link href='/admin/post/create'>
                Add new
            </Link>
            <div className=" overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                ID
                            </th>
                            <th scope="col" className="py-3 px-6">
                                 title
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Image
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Description
                            </th>
                           
                           
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>


                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => <tr key={post.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {post.id}
                            </th>
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {post.title}
                            </th>
                            <td>
                              <img src={post.image!} width={200} height={200}/>
                            </td>
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {
                                  post.description
                                }
                            </th>
                         
                          
                            <td className="py-4 px-6">
                                <ActionButton categoryId={post.id} />
                            </td>

                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default PostList