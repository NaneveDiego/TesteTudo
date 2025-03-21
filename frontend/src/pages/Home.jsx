import { GoSignOut } from 'react-icons/go';
import { Link, useNavigate } from "react-router";
import logo from '../assets/user.png';
import Cookies from 'js-cookie';
import {useEffect,useState } from 'react';
import { userLogged } from '../services/user.js';

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

    useEffect(() => { 
        validateToken();
        getUserLogged();
    },[])

    return (
       
          <section>
                <div className='top'>
                    <img src={logo} width={30} alt="" />
                    <p>{user.name}</p>
                 <Link to="/signin">  <GoSignOut size={30} color="red" /> </Link> 
                </div>

                <div className='coments'>
                   <div className='coment'> 
                        <div className='user'>
                        <img src={user} width={30} alt="" />
                        <p>name</p>
                        </div>
                        <p>exemplo</p>
                   </div>
                </div>

                <div className='bottom'>
                    <input type="text" placeholder="Digite seu comentário" />
                    <button>Enviar</button>
                </div>

          </section>
       
    )
}