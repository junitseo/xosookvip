import { Spin } from 'antd'
import React from 'react'

function LoadingPage() {
  return (
    <div className='LoadingPage'>
      <Spin size="large" />
    </div>
  )
}

export default LoadingPage