import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === '';
const isSixDigits = (value) => value.trim().length === 6;

const Checkout = (props) => {

    const [formValidity , setFormValidity] = useState({
        name : true,
        street : true,
        city : true,
        postal : true
    });
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalIsValid = isSixDigits(enteredPostal);
    const cityIsValid = !isEmpty(enteredCity);

    setFormValidity({
        name : nameIsValid,
        street : streetIsValid,
        city : cityIsValid,
        postal : postalIsValid
    });

    const formIsValid = (nameIsValid && streetIsValid && cityIsValid && postalIsValid);
    if(!formIsValid) {
        return;
    }

    props.onConfirm({
        name : enteredName,
        street : enteredStreet,
        postal : enteredPostal,
        city : enteredCity
    })
  };

  const nameClasses = classes.control + ' ' + (formValidity.name ? '' : classes.invalid);
  const streetClasses = classes.control + ' ' + (formValidity.street ? '' : classes.invalid);
  const postalClasses = classes.control + ' ' + (formValidity.postal ? '' : classes.invalid);
  const cityClasses = classes.control + ' ' + (formValidity.city ? '' : classes.invalid);

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef}/>
        {!formValidity.name && <p style={{color : 'red'}}>Please enter valid name</p> }
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p style={{color : 'red'}}>Please enter valid Street</p> }
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formValidity.postal && <p style={{color : 'red'}}>Please enter valid Postal Code</p> }
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}/>
        {!formValidity.city && <p style={{color : 'red'}}>Please enter valid City</p> }
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
