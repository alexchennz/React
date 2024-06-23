import React, {useState} from "react";
import Header from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { Cart } from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showModal, setShowModal] = useState(false);
  const hideModalHandler = () =>{
    setShowModal(false);
  }
  const showModalHandler = () =>{
    setShowModal(true);
  }
  return (
    <CartProvider>
      {showModal && <Cart hideModal={hideModalHandler}/>}
      <Header onCilckHandler={showModalHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
