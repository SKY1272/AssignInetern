import React,{useState} from 'react'
import './Login.css'
import { useNavigate} from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (name && phone && email) {
      localStorage.setItem('userDetail', JSON.stringify({ name, phone, email }));
      alert('Login successful');
       navigate('/second')
      setName('');
      setPhone('');
      setEmail('');
    }else{
      alert("please fill the all detail")
      // navigate('/second1')
    }
  }

  return (
    <div className='container'>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
        <br />
        <input type='text' value={phone} placeholder='Enter your phone' onChange={(e) => setPhone(e.target.value)} />
        <br />
        <input type='text' value={email} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  );
}

export default Login;
