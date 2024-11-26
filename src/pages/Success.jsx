import React from 'react'
import { useLocation } from 'react-router-dom'

const Success = () => {
    const location = useLocation()
    const { state } = location
  return (
    
    <div>
      sccussful
    </div>
  )
}

export default Success
