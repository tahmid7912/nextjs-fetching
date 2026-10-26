import React from 'react'



// const getPosts = async () =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')


//     if(!res.ok){
//         throw new Error('Failed to fetch data')
//     }
//     return res.json()
// }

async function PostPage() {

    const res =  await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()


  return (
    <div>PostPage are coming soon:{posts.length}</div>
  )
}

export default PostPage