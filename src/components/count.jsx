import React, { useState } from 'react'
import "./Counter.css"

function Counter(){
  const [count, setCount] = useState(0)

  const increase = () => setCount(count + 1)
  const decrease = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="container">
      <h1>Counter</h1>

      <h2 className="count">{count}</h2>

      <div className="buttons">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter