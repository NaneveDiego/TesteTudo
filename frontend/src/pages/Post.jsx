import { useParams } from 'react-router';
import {findOnePostById} from '../services/posts.js'
import { useEffect, useState } from "react";

export default function Post(){
    
    const [post, setPost] = useState([]);
    const { id } = useParams();
    
    async function getPost(){
        try {
         const response = await findOnePostById(id);
        console.log(response.data)
         setPost(response.data)
        
            
        } catch (error) {
            console.log(error.message);
        }

    }

    useEffect(() => {
        getPost();
      }, []);

  
  
    return (
        <div> 
            {post._id} <br />
            {post.title} <br />
            {post.content} <br />
            {post.userId?.name}
        </div>

    );

}