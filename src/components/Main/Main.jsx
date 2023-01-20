/* eslint-disable */
import mainStyles from './main.module.css'

export function Main() {
    console.log('Render Main')
    return (
      <main className={mainStyles.main}>
        <p className={mainStyles.text}>Товары для собак купить в интернет-магазине Dog Food</p>
      </main>
    )
  }
  