import React from 'react'

function Column() {
  return (
    // <React.Fragment>
    //   <td>Name</td>
    //   <td>Type</td>
    // </React.Fragment>
    <> 
      <td>Name</td>  
      <td>Type</td>
    </>
    // Limitations on passing key attributes withing the empty fragment tag
  )
}

export default Column
