import React from 'react'

const ChildComponent = (props) => {
    const {id} = props

  return (
   
    <div>
       <p style={{fontSize:'30px'}}>my det {id} </p> 
    </div>
  )
}

export default ChildComponent