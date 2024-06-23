import React, {useContext, useEffect, useState} from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../UI/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext);
    const {items} = ctx;
    const [btnIsHightlighted, setBtnIsHighlighted] = useState(false);

    const btClass = `${classes.button} ${btnIsHightlighted ? classes.bump : ''}`;

    useEffect(() =>{
        if(items.length === 0){
            return;
        }
        const timer = setBtnIsHighlighted(true);
        setTimeout(()=>{
            setBtnIsHighlighted(false);
        }, 300);

        return () =>{
            clearTimeout(timer);
        }
    }, [items]);
    const numberOfCartItems = items.reduce((carNum, item) => {
        return carNum + item.amount;
    }, 0);
    return (
        <button className={btClass} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Card</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton