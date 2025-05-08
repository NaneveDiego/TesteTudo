'use client'
import { signin } from '@/app/auth/auth'
import { LoginButton } from '@/app/Components/LoginButton';
import Link from 'next/link'
import { useActionState } from 'react';



export default function SigninForm() {
  const [state, action] = useActionState(signin, undefined);
  return (
    <>
      <form action={action} className='flex-col bg-gray-400 w-1/5'>
     
        <div>
          <label className='p-1' htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" placeholder="Digite seu email" />
        </div>
        <div>
          <label className='p-1' htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" placeholder="Digite sua senha" />
        </div>
        <LoginButton />
      </form>
      <div>
        <button>
          <Link href={'/signup'}>Não tem conta?</Link>
        </button>
      </div>
    </>
  )
}