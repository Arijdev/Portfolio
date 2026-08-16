import React from 'react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in...');
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form style={styles.form}>
        <label>Email:</label>
        <input type="email" style={styles.input} />
        <label>Password:</label>
        <input type="password" style={styles.input} />
        <button type="submit" style={styles.button} onClick={handleLogin}>Login</button>
      </form>
      <div style={styles.forgotPassword}>
        <Link to="/forgot-password" style={styles.forgotPasswordButton}>
          Forgot Password?
        </Link>
      </div>
      <div style={styles.socialLogin}>
        <p>Login with:</p>
        <button style={styles.socialButton} onClick={() => handleSocialLogin('Google')}>
          <FaGoogle style={styles.socialIcon} />
          Google
        </button>
        <button style={styles.socialButton} onClick={() => handleSocialLogin('Facebook')}>
          <FaFacebook style={styles.socialIcon} />
          Facebook
        </button>
        <button style={styles.socialButton} onClick={() => handleSocialLogin('Twitter')}>
          <FaTwitter style={styles.socialIcon} />
          Twitter
        </button>
      </div>
      <p style={styles.signupLink}>
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: 'auto',
    marginTop:'15vh',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  forgotPassword: {
    marginBottom: '10px',
  },
  forgotPasswordButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: '14px',
  },
  socialLogin: {
    marginTop: '20px',
  },
  socialButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    backgroundColor: '#fff',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  socialIcon: {
    marginRight: '10px',
  },
  signupLink: {
    marginTop: '20px',
  },
};

export default Login;
