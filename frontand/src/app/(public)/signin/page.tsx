'use client'
import { signin } from '@/app/auth/auth'
import { useFormStatus } from 'react-dom';
import Link from 'next/link'
import { useActionState } from 'react';

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} type="submit" className="mt-4 w-full">
      {pending ? 'Submitting...' : 'Sign in'}
    </button>
  );
}

export default function SigninForm() {
  const [state, action] = useActionState(signin, undefined);
  return (
    <>
      <form action={action}>
     
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
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