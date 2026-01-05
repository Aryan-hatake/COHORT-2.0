import React from 'react'
import Card from './Card'

const Course = ({user}) => {

  return (
    <div>
      Course
      <Card user={user}/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Course
