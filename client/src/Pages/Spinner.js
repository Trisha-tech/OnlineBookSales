import React from 'react'
import loading from './preLoader.gif'
const Spinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <img className="my-3" src={loading} alt="loading" />
    </div>
  )
}

export default Spinner
