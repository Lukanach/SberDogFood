/* eslint-disable */

import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import styles from './App.module.css';
import { Provider } from 'react-redux'
import store from './store';

function App() {

  return (
  <Provider store={store}>
    <div className={styles.app}>
      <Header />

      <div className={styles.outlet}>
        <Outlet />
      </div>

      <Footer />
    </div>
  </Provider >

  )
}

export default App