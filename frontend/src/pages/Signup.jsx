import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import  {BiArrowBack} from "react-icons/bi";
import { Link } from "react-router";
import { signupSchema } from "../schemas/SignupSchema.js";
import {zodResolver} from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";
import { signup } from "../services/user.js";
import { useNavigate } from "react-router";



export default function Signup() {
  const {register,handleSubmit,formState:{errors} } = useForm({resolver: zodResolver(signupSchema)})

  const navigate = useNavigate()

   async function handleSubmitForm(data){
    try {
      await signup(data)
      navigate('/signin')
    } catch (error) {
      console.log(error.message)
    }
  
 
  }
  
  return (
    <div>
      <h1>Signup</h1>
      <Link to="/signin">
       <BiArrowBack/>
      </Link>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Input type="text" placeholder="Name" register={register} name="name" />
            {errors.name && <ErrorInput text={errors.name.message}></ErrorInput>}
            
            <Input type="email" placeholder="Email" register={register} name="email"/>
            {errors.email && <ErrorInput text={errors.email.message}></ErrorInput>}

            <Input type="password" placeholder="Password" register={register} name="password"/>
            {errors.password && <ErrorInput text={errors.password.message}></ErrorInput>}

            <Input type="password" placeholder="Confirm Password"register={register} name="confirmpass" />
            {errors.confirmpass && <ErrorInput text={errors.confirmpass.message}></ErrorInput>}
           
            <Button text="Sign up" type="submit"/>
      </form>
    </div>
  );
}
