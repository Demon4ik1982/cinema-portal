import { FC, FormEventHandler, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { FormField } from '../FormField';
import { Button } from '../../ui/Button/Button';
import { login } from '../../api/User';
import { queryClient } from '../../api/queryClients';
import './LoginForm.css';

type ILoginProps = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginForm: FC<ILoginProps> = ({ setActive }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginMutation = useMutation({
    mutationFn: () => login(email, password),
    onSuccess(){
      queryClient.invalidateQueries({ queryKey: ["users", "me"] })
      setActive(false)
    }
  }, queryClient)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    loginMutation.mutate();
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <FormField label="Email" iconType='email' className='modal-icon'>
        <input
          type="email"
          name="email"
          className='modal-input'
          placeholder='sample@domain.ru'
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </FormField>

      <FormField label="Пароль" iconType='password' className='modal-icon'>
        <input
          type="password"
          name="password"
          className='modal-input'
          placeholder="Пароль"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </FormField>

      {loginMutation.error && <span>Неверный логин или пароль</span>}

      <Button>Войти</Button>
    </form>
  );
};
