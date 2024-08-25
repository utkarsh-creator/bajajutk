
import React, { useState } from 'react';

const ResponseDisplay = ({ responseData }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOptions(
      e.target.checked
        ? [...selectedOptions, value]
        : selectedOptions.filter((opt) => opt !== value)
    );
  };

  const renderData = () => {
    let filteredData = {};
    if (selectedOptions.includes('Numbers')) {
      filteredData['numbers'] = responseData.numbers;
    }
    if (selectedOptions.includes('Alphabets')) {
      filteredData['alphabets'] = responseData.alphabets;
    }
    if (selectedOptions.includes('Highest Lowercase Alphabet')) {
      filteredData['highest_lowercase_alphabet'] =
        responseData.highest_lowercase_alphabet;
    }
    return filteredData;
  };

  return (
    <div>
      <div>
        <label>
          <input
            type='checkbox'
            value='Numbers'
            onChange={handleOptionChange}
          />
          Numbers
        </label>
        <label>
          <input
            type='checkbox'
            value='Alphabets'
            onChange={handleOptionChange}
          />
          Alphabets
        </label>
        <label>
          <input
            type='checkbox'
            value='Highest Lowercase Alphabet'
            onChange={handleOptionChange}
          />
          Highest Lowercase Alphabet
        </label>
      </div>
      <div>
        <h3>Response:</h3>
        <pre>{JSON.stringify(renderData(), null, 2)}</pre>
      </div>
    </div>
  );
};

export default ResponseDisplay;
