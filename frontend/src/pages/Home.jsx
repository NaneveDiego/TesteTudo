import { GoSignOut } from 'react-icons/go';
import { Link, useNavigate } from "react-router";
import logo from '../assets/user.png';
import Cookies from 'js-cookie';
import {useEffect,useState } from 'react';
import { userLogged } from '../services/user.js';
import { findAllPosts } from '../services/posts.js';

export default function Home(){

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    function validateToken(){

        const token = Cookies.get('token');
       
        if(!token){
            navigate('/signin');
        }
    }

    async function getUserLogged(){
        try {
            const userResponse = await userLogged();
            setUser(userResponse.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    async function getPosts(){
        try {
            const response = await findAllPosts();
            setPosts(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => { 
        validateToken();
        getUserLogged();
        getPosts();
    },[])

    return (
       
          <section>
                <div className='top'>
                    <img src={logo} width={30} alt="" />
                    <p>{user.name}</p>
                 <Link to="/signin">  <GoSignOut size={30} color="red" /> </Link> 
                </div>
                {posts.length ? posts.map((post) => (
                        <div key={post._id} className='post'>
                            <div className='user'>
                            
                                <h3>{post.title}</h3>
                            <p className='content'>{post.content}</p>
                            </div >
                        </div>
                    )): <p></p>

                        

                }
                

                <div className='bottom'>
                   
                  <Link to="/new"> <button>Criar post</button></Link> 
                </div>

          </section>
       
    )
}