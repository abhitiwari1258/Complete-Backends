import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault();

        const formData = new FormData(e.target)

        const result = await axios.post('http://localhost:3000/create-post',formData)

        navigate('/feed')
        
    }
  return (
    <div className='create-post-section'>
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name='image' accept='image/*' / >
        <input type="text" name='caption'
        placeholder='Enter Caption' required={true} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreatePost
