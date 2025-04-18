import { useParams, useNavigate } from "react-router";
import { editPost, findOnePostById } from "../services/posts.js";
import { useEffect, useState } from "react";
import { userLogged } from "../services/user.js";
import Input from "../components/Input";
import ErrorInput from "../components/ErrorInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "../schemas/PostSchema.js";
import Button from "../components/Button";



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
  


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(postSchema) });



  async function onSubmitForm(data) {
    console.log(data);
    try {

     const id = post._id
     console.log(id)
    
      const body = {
        title: data.title,
        content: data.content,
        
      };
      await editPost(body,id);
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
      <h1>Edite o post</h1>

      <form onSubmit={handleSubmit(onSubmitForm)} id="newpost">
        {errors.value && <ErrorInput text={errors.value.message} />}
        <Input
          type="text"
          placeholder={post.title}
          name="title"
          register={register}
        />

        {errors.content && <ErrorInput text={errors.content.message} />}
        <Input
          type="text"
          placeholder={post.content}
          name="content"
          register={register}
        />

        <Button text="Postar" type="submit" />
      </form>
    </div>
  );
}
