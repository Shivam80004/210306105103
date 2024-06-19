// src/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      const requestData = {
            "companyName": "shivam",
            "clientID": "7c0fa494-3e3d-40a2-9fa1-d5777fb23b96",
            "clientSecret": "genyQQJJLBWRzGxo",
            "ownerName": "shivam",
            "ownerEmail": "210306105103@paruluniversity.ac.in",
            "rollNo": "1"
      };

      const res = await axios.post('http://20.244.56.144/test/auth', requestData);

      // Assuming the response contains the authorization token
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <button onClick={handleRegister}>Register</button>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Register;
