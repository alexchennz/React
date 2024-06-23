import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import { CartItem } from './CartItem';
import {Modal} from '../UI/Modal';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Sushi',
//       amount: 1,
//       price: 22.99,
//     }
// ];


export const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const hasItems = cartCtx.items.length > 0;

    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const removeItemHandler = (id) =>{
        cartCtx.removeItem(id);
    }

    const addItemHandler = (item) =>{
        // const itemIndex = cartCtx.items.findIndex(ctItem => ctItem.id === item.id);
        // // const currentAmount = cartCtx.items[itemIndex].amount;
        // cartCtx.items[itemIndex].amount += 1;
        cartCtx.addItem({...item, amount: 1});
    }

    const mealsList = cartCtx.items.map(meal => 
        <CartItem 
        key={meal.id}
        id={meal.id} 
        name={meal.name} 
        amount={meal.amount} 
        price={meal.price} 
        onRemoveItem={removeItemHandler.bind(null, meal.id)}
        onAddItem={addItemHandler.bind(null, meal)}
        />
    );
    const orderHandler = () =>{
        setIsCheckout(true);
    }
    const confirmHandler = (sentData) =>{
        setIsSubmitting(true);
        fetch('https://react-http-4e716-default-rtdb.firebaseio.com/orders.json', 
        {
            method: 'POST',
            body: JSON.stringify({
                user: sentData,
                order: cartCtx.items
            })
            
        }
        );
        setIsSubmitting(false);
        setHasSubmitted(true);
        cartCtx.clearCart();
    }
    const totalAmountNum = `$${cartCtx.totalAmount.toFixed(2)}`;

    const modalAction = (<div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.hideModal}>Close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>)

    const CartContent = (<React.Fragment>
        <div className={classes['cart-items']}>
            <ul style={{ 'paddingLeft': 0 }}>
                {mealsList}
            </ul>
        </div>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmountNum}</span>
        </div>
        {isCheckout && <Checkout onCancel={props.hideModal} onConfirm={confirmHandler} />}
        {!isCheckout && modalAction}
    </React.Fragment>)

    const isSubmittingContent = <p>Sending order data...</p>

    const cartSubmittedContent = (<React.Fragment><p>Successfully submitted the cart.</p><div className={classes.actions}>
        <button onClick={props.hideModal}>Close</button>
    </div></React.Fragment>)

    return (
        <Modal hideModal={props.hideModal}>
            {isSubmitting && isSubmittingContent}
            {!isSubmitting && !hasSubmitted && CartContent}
            {hasSubmitted && cartSubmittedContent}
        </Modal>
    )
}
