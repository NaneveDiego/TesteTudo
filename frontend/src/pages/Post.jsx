import { useParams,useNavigate } from "react-router";
import { findOnePostById,deletePost } from "../services/posts.js";
import { useEffect, useState } from "react";
import { userLogged } from "../services/user.js";
import { Link } from "react-router";

export default function Post() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [post, setPost] = useState([]);
  const { id } = useParams();

  async function getPost() {
    try {
      const response = await findOnePostById(id);
      console.log(response.data);
      setPost(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getUserLogged() {
    try {
      const userResponse = await userLogged();
      setUser(userResponse.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function deleteP() {
    try {
     await deletePost(id)
     navigate("/");
     
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getPost();
    getUserLogged();
  }, []);

  return (
    <div>
      {post._id} <br />
      {post.title} <br />
      {post.content} <br />
      {!post.userId ? "loading" : post.userId?.name}
      {  (
        <div>
         <Link to={`/edit/${post._id}`}>
          <button >Editar</button>
         </Link>
          <button onClick={deleteP}>Excluir</button>
        </div>
      )}
      <div>
        <p>comentários</p>
        <div>

        </div>
      </div>
    </div>
  );
}
