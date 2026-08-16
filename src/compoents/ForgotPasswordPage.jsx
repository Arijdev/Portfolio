import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ForgotPassword = () => {
  const handleResetPassword = () => {
    // Implement reset password logic here
    console.log('Resetting password...');
  };

  return (
    <div style={styles.container}>
      <h2>Forgot Password</h2>
      <form style={styles.form}>
        <label>Email:</label>
        <input type="email" style={styles.input} />
        <button type="submit" style={styles.button} onClick={handleResetPassword}>Reset Password</button>
      </form>
      <p style={styles.loginLink}>
        Remembered your password? <Link to="/login">Login</Link>
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
  loginLink: {
    marginTop: '20px',
  },
};

export default ForgotPassword;
