import React from 'react'

const Fetch = () => {
  return (
    <div className='fetch'>
      <h3>Fetch</h3>
      <ol>
        <li>Fetch has no url in request object.</li>
        <li>Fetch is built into most modern browsers; no installation is required as such.</li>
        <li>Fetch does not enjoy built-in XSRF protection.</li>
        <li>Fetch uses the body property.</li>
        <li>Fetch’s body has to be stringified.</li>
        <li>Fetch request is ok when response object contains the ok property.</li>
        <li>Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.</li>
        <li>Fetch does not allow cancelling request and request timeout.</li>
        <li>Fetch, by default, doesn’t provide a way to intercept requests.</li>
        <li>Fetch does not support upload progress.</li>
        <li>Fetch only supports Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ (This is known as Backward Compatibility).</li>
        <li>Fetch “GET” call cannot have body Content.</li>
      </ol>
    </div>
  )
}

export default Fetch