'use client'

import Signup from '@/app/services/signup'
import Link from 'next/link'
import { useActionState } from 'react'

export default function SignupForm() {
  const [state, action] = useActionState(Signup, undefined);
  return (
    <>
      <form className='' action={action}>
      <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Digite seu nome" />
        </div>
        <div className=''>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Digite seu email" />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input id="password" name="password" type="password" placeholder='digite sua senha' />
        </div>
        <button type="submit">Criar conta</button>
      </form>
      <div>
        <button>
          <Link href={'/signin'}>já tem conta?</Link>
        </button>
      </div>
    </>
  )
}