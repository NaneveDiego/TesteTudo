import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import  SigninForm  from '@/app/(public)/signin/page'

test('Page', () => {
    render(<SigninForm />)
    expect(screen.findAllByRole('form')).not.toBeNull
  })