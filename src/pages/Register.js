import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      alert('Error creating user: ' + err.message);
    }
  };

  return React.createElement(
    'div',
    { style: { maxWidth: '400px', margin: 'auto', padding: '2rem' } },
    React.createElement('h2', null, 'Register'),
    React.createElement(
      'form',
      { onSubmit: handleRegister },
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
      React.createElement('button', { type: 'submit' }, 'Register')
    )
  );
}
