import React, { useState } from 'react'

const UseStateHook = () => {
  const [state,setState] = useState(1)
  return (
    <div className='useState'>
      <h4>{state}</h4>
      <button onClick={() => setState(state + 1)}>More</button>
      <button onClick={() => setState(state - 1)}>Less</button>
    </div>
  )
}

export default UseStateHook