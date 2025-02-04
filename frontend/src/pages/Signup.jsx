
  import React, { useState } from 'react';
  import axios from 'axios';  // Add axios for API calls
  import { useNavigate } from 'react-router-dom'; 
  
  const Signup = () => {
    // State to store form data
    const [user, setUser] = useState({
      name: '',
      email: '',
      password: ''
    });
  
    const navigate = useNavigate(); // Initialize navigate
  
    // Handle form data changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value
      });
    };
  
   
    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios.post('http://localhost:8080/user/saveUser', user)
        .then((response) => {
          console.log('User registered:', response.data);
          navigate('/'); // Redirect to home page after successful registration
        })
        .catch((error) => {
          console.error('Error during registration:', error);
        });
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border my-2 w-96 h-10"
            value={user.name}
            onChange={handleInputChange}
            required
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border my-2 w-96 h-10"
            value={user.email}
            onChange={handleInputChange}
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border my-2 w-96 h-10"
            value={user.password}
            onChange={handleInputChange}
            required
          />
          <br />
          <button
            type="submit"
            className="w-24 h-12 border mt-9 cursor-pointer bg-black text-white rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    );
  };
  
  export default Signup;
  