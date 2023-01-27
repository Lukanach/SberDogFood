/* eslint-disable */

import goodItemStyles from "./GoodsItem.module.css"
import PropTypes from "prop-types"

export const GoodsItem = ({ product }) => {
  const { pictures, discount, price, stock, description } = product

  return (
    <div className={goodItemStyles.item}>
      <img className={goodItemStyles.itemImg} src={pictures} alt="product" />
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
        <button className={goodItemStyles.itemButton}>В корзину</button>
        <button className={goodItemStyles.itemButton}>В избранное</button>
      </div>
    </div>
    // </div>
  )
}

GoodsItem.propTypes = {
  product: PropTypes.object,
}