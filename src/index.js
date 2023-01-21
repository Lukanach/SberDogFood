/* eslint-disable */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Main } from './components/Main/Main'
import { Goods } from './components/Pages/Goods/Goods'
import { SignupPage } from './components/Pages/SignupPage/SignupPage'
import { SigninPage } from './components/Pages/SigninPage/SigninPage'


const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'goods',
        element: <Goods />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'signin',
        element: <SigninPage />,
      }
    ]
  }
], { basename: "/SberDogFood" })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>,
)