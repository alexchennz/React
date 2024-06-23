import React, {  useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

export const MealItemForm = (props) => {
    const amountRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);
    const submitForm = (event) =>{
        event.preventDefault();
        const enteredAmount = amountRef.current.value;
        const enteredAmountNum = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNum);
    }

    return (
        <form className={classes.form} onSubmit={submitForm}>
            <Input label="Amount" ref={amountRef} input={{
                id: 'amount_' + props.id,
                type: "number",
                min: 1,
                max: 5,
                defaultValue: 1,
                step: 1
            }}
            />
            {!amountIsValid && <p>Please enter an amount between 1 to 5.</p>}
            <button type="submit">+Add</button>
        </form>
    )
}
