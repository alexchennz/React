import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector} from 'react-redux';

const Cart = (props) => {
  // const amount = useSelector(state=>state.amount);
  // const price = useSelector(state=>state.price);
  // const total = amount * price;
  const items = useSelector(state=>state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(item => <CartItem key={item.id} id={item.id} title={item.name} quantity={item.quantity} total={item.totalPrice} price={item.price}
        />)}
        
      </ul>
    </Card>
  );
};

export default Cart;
