import React, { useState } from 'react'
import { add } from './utils/add'

const StringCalculator = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleCalculate = () => {
    try {
      const res = add(input);
      setResult(res);
      setError(null);
    } catch (err) {
      setResult(null);
      setError(err.message);
      return;
    }
  }

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        width: '100%',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h1>String Calculator</h1>
      <p
        style={{
          textAlign: 'center',
          width: '50%',
          margin: 'auto',
          color: 'gray',
          fontSize: '16px',
        }}
      >
        Enter numbers separated by commas or choice of any delimiter to calculate their sum
        </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          width: '50% ',
          gap: '20px',
        }}>
        <input
          type="text"
          placeholder="Enter numbers separated by commas"
          style={{
            width: '100%',
            padding: '10px',
          }}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          style={{
            width: 'fit-content',
            margin: 'auto',
            padding: '5px 10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: '1px solid gray',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          onClick={handleCalculate}
        >
          Calculate
        </button>
        {result !== null ? <p style={{ color: 'green' }}>Result: {result}</p> : null}
        {error ? <p style={{ color: 'red' }}>Error: {error}</p> : null}
      </div>
    </main>
  )
}

export default StringCalculator