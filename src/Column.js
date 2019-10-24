import React from 'react'

const Column = (props) => {
 return (
  <div className="col-4">
    <h3>{props.anything}</h3>
    <p>{props.desc}</p>
  </div>
 )

}

export default Column
