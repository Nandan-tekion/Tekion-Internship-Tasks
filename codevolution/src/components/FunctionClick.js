import React from 'react'

function FunctionClick() {

    function clickhandler(){
        console.log('button clicked from function click handler');
    }

  return (
    <div>
      <button onClick={clickhandler}> Function Click</button>
    </div>
  )
}

export default FunctionClick;