import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Feed = () => {
    const [posts,setPosts] = useState([])
    
    const fetchPost = async()=>{
        const res = await axios.get('http://localhost:3000/posts')

        setPosts(res.data.posts)
        // console.log(data)
    }

    useEffect(()=>{
        fetchPost()
    },[])

  return (
    <div className='feed-section'>
      <h1>Feed</h1>
      {
        posts.length > 0 ? (
            posts.map((post)=>{
                return(
                    <div key={post._id} className='post-card'>
                        <img src={post.image} />
                        <p>{post.caption}</p>
                    </div>
                )
            })
        ) :(
            <h1>No post availabel !</h1>
        )
      }
    </div>
  )
}

export default Feed
