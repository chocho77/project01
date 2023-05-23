import React, { useState } from 'react'

function ErrorExample() {
  
  const [title,setTitle] = useState('random text');
  const handleClick = () =>{
    if(title === 'random text'){
      setTitle('hello people');
    }else if(title === 'hello people'){
      setTitle('random text');
    }
  
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' onClick={handleClick}>
           change title    
      </button>
    </React.Fragment>
  )
}


export default ErrorExample