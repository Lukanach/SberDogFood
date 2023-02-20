/* eslint-disable */
import styles from "./CartItem.module.css"
import { useDispatch, useSelector } from "react-redux"
import classNames from "classnames";
import { cartActions } from "../../store/cart";

export default ({ product, className }) => {

  const dispatch = useDispatch();

  const count = useSelector((state) => state.cart.added[product._id] || 0);
  const isChecked = useSelector((state) => state.cart.selected.includes(product._id));

  const onMinus = () => {
    dispatch(cartActions.decrement({ id: product._id }));
  }

  const onPlus = () => {
    dispatch(cartActions.increment({ id: product._id }));
  }

  const onRemove = () => {
    dispatch(cartActions.remove({ id: product._id }));
  };

  const onSelect = (event) => {
    dispatch(cartActions.select({
      id: product._id,
      isSelected: event.target.checked
    }));
  };

  return (
    <div className={classNames(styles.item, className)}>
      <input type="checkbox" className={styles.checkbox} checked={isChecked} onChange={(e) => onSelect(e)} />
      <img className={styles.img} src={product.pictures} alt="" />
      <div className={styles.name}>{product.name}</div>
      <div className={styles.price}>Цена {product.price} р.</div>
      <div className={styles.stock}>Доступно {product.stock} шт.</div>
      <div className={styles.actions}>
        <div className={styles.buttons}>
          <button className={styles.button} disabled={count <= 1} onClick={onMinus}>-</button>
          <span className={styles.count} >{count}</span>
          <button className={styles.button} disabled={count >= product.stock} onClick={onPlus}>+</button>
        </div>
        <div className={styles.remove} onClick={onRemove}>
          Удалить
        </div>
      </div>
    </div>
  )
}