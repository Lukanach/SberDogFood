/* eslint-disable */

import { Link } from 'react-router-dom'
import headerStyles from './header.module.css'
import logoImg from './logo.png'
import favoritestImg from './favorites.png'
import cartImg from './cart.png'

export const Header = () => {

  return (
    <header className={headerStyles.wr}>
        <div className={headerStyles.container}>
            <Link to="/" className={headerStyles.logo}>
                <img className={headerStyles.imgLogo} src={logoImg}>
                    
                </img>
                <p>
                    Dog Food
                </p>
            </Link>
            <div>
                <form>
                    <input className={headerStyles.search} placeholder="Поиск по сайту"></input>
                </form>
            </div>
            <div className={headerStyles.icons}>
                <Link to="/">
                    <img className={headerStyles.imgFavorite} src={favoritestImg}>
                    </img>
                </Link>

                <Link to="/">
                    <img className={headerStyles.imgCart} src={cartImg}>
                    </img>
                </Link>

                <Link className={headerStyles.link} to="/signin">
                    <p className={headerStyles.sign}>Вход</p>
                </Link>
                
                <Link className={headerStyles.link} to="/signup">
                    <p className={headerStyles.sign}>Регистрация</p>
                </Link>
            </div>
        </div>
    </header>
  )
}