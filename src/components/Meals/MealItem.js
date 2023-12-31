import { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../context/cart-context';

function MealItem(props) {

  const cartContext = useContext(CartContext);
  
  const formatedPrice = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
     cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
     })
  }
  
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
}

export default MealItem;
