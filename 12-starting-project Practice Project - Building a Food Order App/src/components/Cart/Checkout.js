import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFourChars = (value) => value.trim().length === 4;

const Checkout = (props) => {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
    });

    const submitHandler = (event) =>{
        event.preventDefault();
        const nameInputValue = nameInputRef.current.value;
        const streetInputValue = streetInputRef.current.value;
        const postalInputValue = postalInputRef.current.value;
        const cityInputValue = cityInputRef.current.value;
        
        const enteredNameIsValid = !isEmpty(nameInputValue);
        const enteredStreetIsValid = !isEmpty(streetInputValue);
        const enteredCityIsValid = !isEmpty(cityInputValue);
        const enteredPostalCodeIsValid = isFourChars(postalInputValue);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid,
        });
        
        const formIsValid =
        enteredNameIsValid &&
        enteredStreetIsValid &&
        enteredCityIsValid &&
        enteredPostalCodeIsValid;

        if (!formIsValid) {
        return;
        }

        props.onConfirm({
            name: nameInputValue,
            street: streetInputValue,
            city: cityInputValue,
            postal: postalInputValue
        });
    }

    const nameControlClasses = `${classes.control} ${
        formInputsValidity.name ? '' : classes.invalid
      }`;
      const streetControlClasses = `${classes.control} ${
        formInputsValidity.street ? '' : classes.invalid
      }`;
      const postalCodeControlClasses = `${classes.control} ${
        formInputsValidity.postalCode ? '' : classes.invalid
      }`;
      const cityControlClasses = `${classes.control} ${
        formInputsValidity.city ? '' : classes.invalid
      }`;

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id='name' ref={nameInputRef} />
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor="street">Street</label>
                <input type="text" id='street' ref={streetInputRef} />
                {!formInputsValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor="postcode">Post Code</label>
                <input type="text" id='postcode' ref={postalInputRef} />
                {!formInputsValidity.postalCode && (
                <p>Please enter a valid postal code (4 characters long)!</p>
                )}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor="city">City</label>
                <input type="text" id='city' ref={cityInputRef}/>
                {!formInputsValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default Checkout