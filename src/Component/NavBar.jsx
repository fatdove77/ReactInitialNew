import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => { navigate("/") }}>主页</Button>
      <Button onClick={() => { navigate("/Person") }}>person</Button>
      <Button onClick={() => { navigate("/Report") }}>report</Button>
    </div>
  )
}

export default NavBar