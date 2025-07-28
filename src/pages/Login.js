import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return React.createElement(
    'div',
    { style: { maxWidth: '400px', margin: 'auto', padding: '2rem' } },
    React.createElement('h2', null, 'Login'),
    error ? React.createElement('p', { style: { color: 'red' } }, error) : null,
    React.createElement(
      'form',
      { onSubmit: handleLogin },
      React.createElement('input', {
        type: 'email',
        placeholder: 'Email',
        value: email,
        onChange: (e) => setEmail(e.target.value),
        required: true
      }),
      React.createElement('input', {
        type: 'password',
        placeholder: 'Password',
        value: password,
        onChange: (e) => setPassword(e.target.value),
        required: true
      }),
      React.createElement('button', { type: 'submit' }, 'Login')
    ),
    React.createElement(
      'p',
      null,
      `Don't have an account? `,
      React.createElement('a', { href: '/register' }, 'Register')
    )
  );
}
