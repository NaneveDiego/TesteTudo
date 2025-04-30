import Input from "../components/Input";
import ErrorInput from "../components/ErrorInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "../schemas/PostSchema.js";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { createNewPost } from "../services/posts.js";




export default function NewPage() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(postSchema) });



  async function onSubmitForm(data) {
    console.log(data);
    try {
    
      const body = {
        title: data.title,
        content: data.content,
        
      };
      await createNewPost(body);
      navigate("/");
    
    } catch (error) {
      console.log(error.message);
    }
  }

 
  return (
    <div>
      <h1>NewPost</h1>

      <form onSubmit={handleSubmit(onSubmitForm)} id="newpost">
        {errors.value && <ErrorInput text={errors.value.message} />}
        <Input
          type="text"
          placeholder="titulo"
          name="title"
          register={register}
        />

        {errors.content && <ErrorInput text={errors.content.message} />}
        <Input
          type="text"
          placeholder="conteudo"
          name="content"
          register={register}
        />

        <Button text="Postar" type="submit" />
      </form>
    </div>
  );
}
