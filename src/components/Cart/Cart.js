import styles from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import { useContext } from 'react';
import CartContext from '../../context/cart-context';
import CartItem from './CartItem';

function Cart(props) {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;

  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartContext.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          onAdd={addCartItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClosed={props.onClosed}>
      {cartItems}
      <div className={styles.total}>
        <span>Viso</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onClosed}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Uzsakyti</button>}
      </div>
    </Modal>
  );
}

export default Cart;
