import React, { useState } from 'react'

export const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'peter', 
    age:24,
    message:'random message'});
  return (
    <h2>UseStateObject</h2>
  )
}
