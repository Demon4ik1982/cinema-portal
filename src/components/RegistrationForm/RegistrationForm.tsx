import { FC, FormEventHandler, useState } from 'react';
import { FormField } from '../FormField';
import { Button } from '../../ui/Button/Button';
import './RegistrationForm.css';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../../api/User';
import { queryClient } from '../../api/queryClients';

type IRegistrationProps = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegistrationForm: FC<IRegistrationProps> = ({ setActive }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const registerMutation = useMutation({
    mutationFn: () => registerUser(email, password, username, surname),
  }, queryClient)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    registerMutation.mutate();
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <FormField label="Email" iconType='email'>
        <input
          type="email"
          name="email"
          className='modal-input'
          placeholder='sample@domain.ru'
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </FormField>
      <FormField label="Имя пользователя" iconType='person'>
        <input
          type="text"
          name="username"
          className='modal-input'
          placeholder='Имя'
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
      </FormField>
      <FormField label="Имя пользователя" iconType='person'>
        <input
          type="text"
          name="surname"
          className='modal-input'
          placeholder='Фамилия'
          onChange={(event) => setSurname(event.target.value)}
          value={surname}
        />
      </FormField>
      <FormField label="Пароль" iconType='password'>
        <input
          type="password"
          name="password"
          className='modal-input'
          placeholder="Пароль"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </FormField>
      <FormField label="Повторите пароль" iconType='password'>
        <input
          type="password"
          name="passwordRepeat"
          className='modal-input'
          placeholder="Повторите пароль"
          onChange={(event) => setPasswordRepeat(event.target.value)}
          value={passwordRepeat}
        />
      </FormField>

      {registerMutation.error && <span>{registerMutation.error.message}</span>}

      <Button onClick={() => setActive(false)}>Создать аккаунт</Button>
    </form>
  );
};
