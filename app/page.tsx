

import Link from 'next/link';

// export const revalidate = 60;
// export const dynamic='error';

  
  
  
 function Home() {

  return (
   <div>
      <h2>Welcome to coders sight</h2>
      <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/admin/post/create" >
          Add New Blog
      </Link>
<div className='p-4 flex'>
     
   </div>
   </div>
  )
}


export default  Home;