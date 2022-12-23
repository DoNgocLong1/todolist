
import Dashboard from 'components/Dashboard/Dashboard'
import Sidebar from 'components/Sidebar/Sidebar'
import React from 'react'
import {Container} from './Task.styled'
const Task = () => {
  return (
    <Container>
      <Sidebar/>
      <Dashboard/>
    </Container>
  )
}

export default Task