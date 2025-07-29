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
      'Login'
    ),
    error
      ? React.createElement(
          'p',
          { style: { color: 'red', marginBottom: '1rem', textAlign: 'center' } },
          error
        )
      : null,
    React.createElement(
      'form',
      { onSubmit: handleLogin },
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
            backgroundColor: '#007bff',
            color: '#fff',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          },
          onMouseOver: (e) => (e.target.style.backgroundColor = '#0056b3'),
          onMouseOut: (e) => (e.target.style.backgroundColor = '#007bff')
        },
        'Login'
      )
    ),
    React.createElement(
      'p',
      {
        style: {
          marginTop: '1.5rem',
          textAlign: 'center',
          fontSize: '0.95rem'
        }
      },
      `Don't have an account? `,
      React.createElement(
        'a',
        {
          href: '/register',
          style: {
            color: '#007bff',
            textDecoration: 'none',
            fontWeight: 'bold'
          }
        },
        'Register'
      )
    )
  );
}
