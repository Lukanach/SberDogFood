/* eslint-disable */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Main } from './components/Main/Main'
import { SignupPage } from './Pages/SignupPage/SignupPage'
import { SigninPage } from './Pages/SigninPage/SigninPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Goods } from './Pages/Goods/Goods'
import { AppContextProvider } from './contexts/AppContextProvider'


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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
          <RouterProvider router={myRouter} />
        </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)