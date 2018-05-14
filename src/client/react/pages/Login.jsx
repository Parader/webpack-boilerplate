import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className='login-container'>
        <h1>Login</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Home;
