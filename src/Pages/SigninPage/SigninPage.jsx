/* eslint-disable */

import signinStyles from './signinpage.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createSigninFormValidationSchema } from './validator'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContextProvider';
import React, { useContext } from 'react';
import { Loader } from '../../components/Loader/Loader.jsx'
import authSlice from '../../store/auth'
import { useDispatch } from 'react-redux';


const initialValues = {
  email: '',
  password: '',
}

export const SigninPage = () => {
const navigate = useNavigate()

const { setToken } = useContext(AppContext)
const dispatch = useDispatch();

const { mutateAsync, isLoading, isError, error } = useMutation({
  mutationFn: (data) => {
    return fetch("https://api.react-learning.ru/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error(
            `Неправильные логин или пароль`
          )
        }
        if (res.status === 404) {
          throw new Error(
            `Ошибка ${res.status}: пользователя с таким email не существует`
          )
        }

        return res
      })
      .then((res) => res.json())
      .then((data) => {
        dispatch(authSlice.actions.setToken(data.token));
      })
  },
})

const submitHandler = async (values) => {
  await mutateAsync(values)
  setTimeout(() => {
    navigate(`/goods`)
  }, 0)
}

if (isError) return <p>{error.message}</p>
if (isLoading) return <Loader />

return (
  <Formik
    initialValues={initialValues}
    validationSchema={createSigninFormValidationSchema}
    onSubmit={submitHandler}
  >
    <Form className={signinStyles.form}>
      <Field className={signinStyles.input} name="email" placeholder="Email" type="text" />
      <ErrorMessage component="p" className="error" name="email" />

      <Field className={signinStyles.input} name="password" placeholder="Пароль" type="text" />
      <ErrorMessage component="p" className="error" name="password" />

      <button className={signinStyles.btn} type="submit">Вход</button>
    </Form>
  </Formik>
)
}