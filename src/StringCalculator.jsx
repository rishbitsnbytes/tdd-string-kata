import React, { useState } from 'react'

const StringCalculator = () => {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        width: '100%',
        margin: 'auto',
      }}
    >
      <h1>String Calculator</h1>
      <p>Enter numbers separated by commas to calculate their sum.</p>
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
          }}>
          Calculate
        </button>
        {result !== null ? <p style={{ color: 'green' }}>Result: {result}</p> : null}
        {error ? <p style={{ color: 'red' }}>Error: {error}</p> : null}
      </div>
    </main>
  )
}

export default StringCalculator