import React, { useState, useEffect } from 'react'

const UseEffectHook = () => {
  const [message, setMessage] = useState('Hi there, how are you?');

  useEffect(() => {
    console.log('trigger use effect hook');

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 2000)
  })

  return <h1>{message}</h1>
}

export default UseEffectHook