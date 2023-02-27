import React from 'react';

// function Greet(){
//     return <h1>Hello From React</h1>;
// }

/*export*/
const Greet = (props) => {
    const {name, lastname} = props;
    return (
        <div>
            <h1>Hello {name} {lastname}</h1>
            {props.children}
        </div>
    );
} // name export

export default Greet; // default export

