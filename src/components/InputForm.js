
import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ setResponseData }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(jsonInput);
      const response = await axios.post('https://bfhl-bajaj-production.up.railway.app/bfhl', parsedData);
      setResponseData(response.data);
      setError('');
    } catch (err) {
      setError('Invalid JSON format or request failed.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='Enter JSON data'
          rows={5}
          cols={50}
        />
        <button type='submit'>Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default InputForm;
