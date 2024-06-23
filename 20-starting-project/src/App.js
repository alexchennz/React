import React, { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const showCart = useSelector(state=>state.ui.cartIsVisible);
  const notification = useSelector(state=>state.ui.notification);
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(isInitial){
      isInitial = false;
      return;
    }
    const sendCartData = async () =>{
      dispatch(
        uiActions.sendNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
      const response = await fetch('https://react-http-4e716-default-rtdb.firebaseio.com/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart)
      }
      )
      if(!response.ok){
        throw new Error("Failed to send cart");
      }

      dispatch(uiActions.sendNotification({
        status: "success",
        title: "Sent",
        message: "Sent successfully!"
      }));
    }


    sendCartData().catch(()=>{
      dispatch(uiActions.sendNotification({
        status: "error",
        title: "Oops",
        message: "Something went wrong!"
      }))
    })
  },[cart, dispatch])
  return (
    <React.Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
