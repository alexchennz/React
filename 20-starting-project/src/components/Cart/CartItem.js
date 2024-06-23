import { useDispatch} from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props;
  // const totalQuantity = useSelector(state=>state.cart.totalQuantity);

  const dispatch = useDispatch();

  const incrementCart = () =>{
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price
    }))
  }

  const decrementCart = () =>{
      dispatch(cartActions.removeItemFromCart(id))

  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementCart}>-</button>
          <button onClick={incrementCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
