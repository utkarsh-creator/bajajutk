import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';
import './index.css';

const App = () => {
  const [responseData, setResponseData] = useState(null);
  useEffect(() => {
    document.title = '21BCI0317'; 
  }, []);

  return (
    <div className='App'>
      <h1>21BCI0317</h1> 
      <InputForm setResponseData={setResponseData} />
      {responseData && <ResponseDisplay responseData={responseData} />}
    </div>
  );
};

export default App;
