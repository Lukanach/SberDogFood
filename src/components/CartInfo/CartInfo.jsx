/* eslint-disable */
import styles from "./CartInfo.module.css"
import { useSelector } from "react-redux"
import classNames from "classnames";

export default ({ className, products }) => {

  const sum = useSelector((state) => {
    const { added, selected } = state.cart;

    return selected.reduce((acc, id) => {
      const product = products.find((product) => product._id === id);
      const count = added[id];
      const total = product.price * count * (1 - product.discount / 100);
      acc += total;
      return acc;
    }, 0);
  });

  const count = useSelector((state) => state.cart.selected.length);

  return (
    <div className={classNames(styles.info, className)}>
      <div className={styles.sum}>{sum} р.</div>
      <div>с учетом скидок</div>
      <div className={styles.count}>Выбрано {count} позиции</div>
      <button className={styles.buy}>Оформить</button>
    </div>
  )
}