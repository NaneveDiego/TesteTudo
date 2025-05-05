'use client'

import Link from 'next/link'

export default function SignupForm() {
  return (
    <>
      <form className=''>
        <div className=''>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <button>
          <Link href={'/signin'}>já tem conta?</Link>
        </button>
      </div>
    </>
  )
}