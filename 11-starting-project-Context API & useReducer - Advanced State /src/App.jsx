import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import CartContextProvider from './store/shop-cart-context.jsx';

function App() {
  

  return (
    <CartContextProvider>
      <Header/>
      <Shop/>
    </CartContextProvider>
  );
}

export default App;
