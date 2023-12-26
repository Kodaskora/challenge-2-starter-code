import styles from './Cart.module.css';
import Modal from '../UI/Modal/Modal';

function Cart(props) {
  const cartItems =<ul className={styles['cart-items']}>{[{id: 'm1', name: 'Sushi', amount: 2, price: 10.99}].map(item => <li>{item.name}</li>)}</ul>;

  return <Modal onClosed={props.onClosed}>
    {cartItems}
    <div className={styles.total}>
      <span>Viso</span>
      <span>49.99</span>
    </div>
    <div className={styles.actions}>
      <button className={styles['button--alt']} onClick={props.onClosed}>Close</button>
      <button className={styles.button}>Uzsakyti</button>
    </div>
  </Modal>;
}

export default Cart;