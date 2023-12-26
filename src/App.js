import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartContextProvider from './context/CartContextProvider';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  }

  const closeCartHandler = () => {
    setCartIsVisible(false);
  }
  
  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onClosed={closeCartHandler}/>}
      <Header onClick={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
