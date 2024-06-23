import React from 'react';
import classes from './CartItem.module.css';

export const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <div className={classes['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <div className={classes.price}>
                        {price}
                    </div>
                    <div className={classes.amount}>
                        X {props.amount}
                    </div>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemoveItem}>-</button>
                <button onClick={props.onAddItem}>+</button>
            </div>
        </div>
    )
}
