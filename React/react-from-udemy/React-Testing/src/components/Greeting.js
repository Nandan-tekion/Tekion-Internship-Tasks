import React, { useState } from 'react'

const Greeting = () => {

    const [changed ,setChanged] = useState(false);

    const changeHandler = () => {
        setChanged(true);
    };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changed && <p>It's good to see you</p>}
      {changed && <p>Changed!</p>}
      <button onClick={changeHandler}>Change</button>
    </div>
  )
}

export default Greeting
