import Input from '../UI/Input/Input';
import styles from './MealItemForm.module.css';

function MealItemForm(props) {
  return (
    <form className={styles.form}>
      <Input
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
    </form>
  );
}

export default MealItemForm;
