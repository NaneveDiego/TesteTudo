import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router";
import { signinSchema } from "../schemas/SigninSchema.js";
import {zodResolver} from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";
import { signin } from "../services/user.js";
import Cookies from 'js-cookie';



export default function Signin() {

  const {register,handleSubmit, formState:{errors} } = useForm({resolver: zodResolver(signinSchema)})

  const navigate = useNavigate();

  async function handleSubmitForm(data){
    try {
      const token = await signin(data);
      Cookies.set('token', token.data, { expires: 1});
      navigate("/")
      
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
        <h2>Signin</h2>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Input type="email" placeholder="Email" register={register} name="email" />
            {errors.email && <ErrorInput text={errors.email.message}></ErrorInput>}
           <Input type="password" placeholder="Password" register={register} name="password" />
            {errors.password && <ErrorInput text={errors.password.message}></ErrorInput>}
            <Button text="Sign in" type="submit"/>

        </form>

      <p><Link to="/signup">Registre aqui</Link> </p>
    </div>


  )
}