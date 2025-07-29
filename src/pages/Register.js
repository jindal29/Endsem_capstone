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
    {
      style: {
        maxWidth: '400px',
        margin: '5rem auto',
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif'
      }
    },
    React.createElement(
      'h2',
      {
        style: {
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: '#333'
        }
      },
      'Register'
    ),
    React.createElement(
      'form',
      { onSubmit: handleRegister },
      React.createElement('input', {
        type: 'email',
        placeholder: 'Email',
        value: email,
        onChange: (e) => setEmail(e.target.value),
        required: true,
        style: {
          width: '100%',
          padding: '0.75rem',
          marginBottom: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '1rem'
        }
      }),
      React.createElement('input', {
        type: 'password',
        placeholder: 'Password',
        value: password,
        onChange: (e) => setPassword(e.target.value),
        required: true,
        style: {
          width: '100%',
          padding: '0.75rem',
          marginBottom: '1.5rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '1rem'
        }
      }),
      React.createElement(
        'button',
        {
          type: 'submit',
          style: {
            width: '100%',
            padding: '0.75rem',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#28a745',
            color: '#fff',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          },
          onMouseOver: (e) => (e.target.style.backgroundColor = '#218838'),
          onMouseOut: (e) => (e.target.style.backgroundColor = '#28a745')
        },
        'Register'
      )
    )
  );
}
