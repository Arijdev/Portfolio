import React from 'react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Signup = () => {
  const handleSignup = () => {
    // Implement signup logic here
    console.log('Signing up...');
  };

  const handleSocialSignup = (provider) => {
    // Implement social signup logic here
    console.log(`Signing up with ${provider}`);
  };

  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <form style={styles.form}>
        <label>Name:</label>
        <input type="text" style={styles.input} />
        <label>Email:</label>
        <input type="email" style={styles.input} />
        <label>Password:</label>
        <input type="password" style={styles.input} />
        <button type="submit" style={styles.button} onClick={handleSignup}>Sign Up</button>
      </form>
      <div style={styles.socialSignup}>
        <p>Sign up with:</p>
        <button style={styles.socialButton} onClick={() => handleSocialSignup('Google')}>
          <FaGoogle style={styles.socialIcon} />
          Google
        </button>
        <button style={styles.socialButton} onClick={() => handleSocialSignup('Facebook')}>
          <FaFacebook style={styles.socialIcon} />
          Facebook
        </button>
        <button style={styles.socialButton} onClick={() => handleSocialSignup('Twitter')}>
          <FaTwitter style={styles.socialIcon} />
          Twitter
        </button>
      </div>
      <p style={styles.loginLink}>
        Already have an account? <Link to="/login">Login</Link>
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
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  socialSignup: {
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
  loginLink: {
    marginTop: '20px',
  },
};

export default Signup;
