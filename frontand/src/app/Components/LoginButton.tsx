import { useFormStatus } from 'react-dom';
export function LoginButton() {
    const { pending } = useFormStatus();
  
    return (
      <button aria-disabled={ pending } type="submit" className="mt-4 w-full">
        {pending ? 'Entrando...' : 'Entrar'}
      </button>
    );
  }