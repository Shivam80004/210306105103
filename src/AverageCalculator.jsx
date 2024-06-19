import React, { useState, useEffect } from 'react';
import { fetchNumber } from './ApiClient';

const WINDOW_SIZE = 10;

const AverageCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(null);

  const calculateAverage = (nums) => {
    if (nums.length === 0) return null;
    const sum = nums.reduce((acc, num) => acc + num, 0);
    return sum / nums.length;
  };

  const addNumber = async (type) => {
    const newNumber = await fetchNumber(type);
    if (newNumber !== null && !numbers.includes(newNumber)) {
      const updatedNumbers = [...numbers, newNumber];
      if (updatedNumbers.length > WINDOW_SIZE) {
        updatedNumbers.shift(); // Remove the oldest number
      }
      setNumbers(updatedNumbers);
      setAverage(calculateAverage(updatedNumbers));
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <div>
        <button onClick={() => addNumber('p')}>Prime</button>
        <button onClick={() => addNumber('f')}>Fibonacci</button>
        <button onClick={() => addNumber('e')}>Even</button>
        <button onClick={() => addNumber('r')}>Random</button>
      </div>
      <div>
        <h2>Stored Numbers</h2>
        <p>{numbers.join(', ')}</p>
      </div>
      <div>
        <h2>Average</h2>
        <p>{average !== null ? average.toFixed(2) : 'N/A'}</p>
      </div>
    </div>
  );
};

export default AverageCalculator;
