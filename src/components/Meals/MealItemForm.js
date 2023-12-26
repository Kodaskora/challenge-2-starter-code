import Input from '../UI/Input/Input';
import styles from './MealItemForm.module.css';
import { useRef, useState } from 'react';

function MealItemForm(props) {

  const [isAmountValid, setIsAmountValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputAmount = amountInputRef.current.value;

    if (inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(+inputAmount);

  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
        label='Kiekis'
      />
      <button type='submit'>Add</button>
      {!isAmountValid && <p>Prasau iveskite skaiciu nuo 1 iki 10!</p>}
    </form>
  );
}

export default MealItemForm;
