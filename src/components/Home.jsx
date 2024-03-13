import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation()
  const {email} = location.state || {};
  return (
    <div className='flex flex-col gap-4'>
      <h1>Hello</h1>
      {email && <h4>Email: {email}</h4>}
    </div>
  )
}

export default Home