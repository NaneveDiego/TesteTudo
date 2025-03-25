import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:5000";

export function findAllPosts() {
  const response = axios.get(`${baseURL}/post`,{headers: {Authorization: `Bearer ${Cookies.get('token')}`}});

  return response;
}

export function createNewPost(body){
    
    const response = axios.post(`${baseURL}/post`,body,{headers: {Authorization: `Bearer ${Cookies.get('token')}`}});

    return response;
}