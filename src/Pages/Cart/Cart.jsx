/* eslint-disable */

import { useSelector } from "react-redux";
import styles from "./Cart.module.css"
import { useQuery } from "@tanstack/react-query"
import CartItem from '../../components/CartItem/CartItem';
import CartInfo from '../../components/CartInfo/CartInfo';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';

export const CartPage = () => {
  const added = useSelector((state) => Object.keys(state.cart.added));
  const token = useSelector((state) => state.auth.token);

  const res = useQuery({
    queryKey: ['cart'],
    queryFn: () => {
      const requests = added.map((id) => {
        return fetch(`https://api.react-learning.ru/products/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw res;
          });
      });

      return Promise.all(requests);
    },
  });

  useEffect(() => {
    res.refetch();
  }, [added.length]);

  if (!added.length) {
    return (
      <div className={styles.empty}>
        <div>Корзина пуста</div>
        <Link to="/goods" >В каталог</Link>
      </div>
    )
  }

  if (res.isFetching) {
    return <Loader />
  }

  if (res.isError) {
    return <div>Ошибка загрузки {JSON.stringify(res.error)}</div>
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.cartItems}>
        {res.data.map((product) => <CartItem
          className={styles.cartItem}
          key={product._id}
          product={product}
        />)}
      </div>
      <CartInfo className={styles.cartInfo} products={res.data} />
    </div>
  )
};