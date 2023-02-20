/* eslint-disable */
import mainStyles from './main.module.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function Main() {

  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate(`/goods`);
    }
  }, [])

  return (
    <main className={mainStyles.main}>
      <p className={mainStyles.text}>Добро пожаловать в интернет-магазин Dog Shop</p>
    </main>
  )
}