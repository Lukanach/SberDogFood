/* eslint-disable */

import goodItemStyles from "./GoodsItem.module.css"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../../store/cart"

export const GoodsItem = ({ product }) => {
  const { pictures, discount, price, stock, description } = product
  const dispatch = useDispatch();
  const inCart = useSelector((state) => state.cart.added[product._id]);

  const onAddToCart = () => {
    const id = product._id;
    const action = inCart
      ? cartActions.decrement({ id })
      : cartActions.increment({ id });

    dispatch(action);
  };

  return (
  <div className={goodItemStyles.item}>
    <img className={goodItemStyles.itemImg} src={pictures} alt="product" />
    <div>{product.name}</div>
      <p>
        <span>Скидка:</span> {discount} %
      </p>
      <p>
        <span>Цена:</span> {price} ₽
      </p>
      <p>
        <span>Осталось:</span> {stock} шт.
      </p>
      <span>Описание товара:</span>
      <p>&quot;{description}&quot;</p>
      <div className={goodItemStyles.blockBtn}>
          <button className={goodItemStyles.itemButton} onClick={onAddToCart}>{inCart ? 'Удалить' : 'В корзину'}</button>
          <button className={goodItemStyles.itemButton}>В избранное</button>
      </div>
    </div>
  )
}

GoodsItem.propTypes = {
  product: PropTypes.object,
}