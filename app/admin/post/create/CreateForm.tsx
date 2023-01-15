'use client'
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from "react"
import TextInput from "../../../../ui/inputs/TextInput"
// @ts-ignore
import {CldUploadButton} from 'next-cloudinary'; 
function CreateForm({ categories }: any) {

    const router = useRouter();
    const [title, setTitle] = useState("");
    const [categoryId, setCategoryId] = useState<number>(0);
    const [image,setImage]=useState<string>("");
    const [description,setDescription]=useState<string>("");


    const uploadImage=(err:any,data:any)=>{
        
        if(!err){
            setImage(data.info.secure_url);
        }


    }

    const addPost = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
     


        const res = await fetch('/api/post/create', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, category_id: categoryId,image,description })
        }).then(res => res.json());

        router.push('/admin/post', {
            forceOptimisticNavigation: false,

        });
    }
    return (
        <form onSubmit={addPost}>
            <div className="relative z-0 mb-6 w-full group">
                {
                    image&&<img src={image}/>
                }
            <CldUploadButton uploadPreset="images" onUpload={uploadImage}/>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <TextInput onChange={setTitle} />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea onChange={e=>setDescription(e.target.value)} id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Category</label>
                <select
                    onChange={e => setCategoryId(parseInt(e.target.value))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Select Category</option>
                    {
                        categories.map((category: any) => <option value={category.id} key={category.id}>{category.name}</option>)
                    }
                </select>
            </div>
        
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form >
    )
}

export default CreateForm