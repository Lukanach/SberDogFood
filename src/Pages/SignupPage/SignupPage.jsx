/* eslint-disable */

import signupStyles from './signuppage.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createSignupFormValidationSchema } from './validator'
import { useMutation } from '@tanstack/react-query'
import { Route, useNavigate } from 'react-router-dom'

const initialValues = {
    email: '',
    group: 'sm9',
    password: '',
}

export function SignupPage() {
  const navigate = useNavigate()

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (data) => fetch('https://api.react-learning.ru/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status > 299) {
        navigate(`/signup/error`)
      } else navigate(`/signin`)
    })
  })

  const submitHandler = async (values) => {
    console.log({ values})

    await mutateAsync(values)

  }
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createSignupFormValidationSchema}
      onSubmit={submitHandler}
    >
      <Form className={signupStyles.form}>
        <Field className={signupStyles.input} name="email" placeholder="Email here" type="text" />
        <ErrorMessage component="p" className="error" name="email" />
    
        <Field className={signupStyles.input} name="group" placeholder="group here" type="text" />
        <ErrorMessage component="p" className="error" name="group" />

        <Field className={signupStyles.input} name="password" placeholder="password here" type="text" />
        <ErrorMessage component="p" className="error" name="password" />
    
        <button disabled={isLoading} className={signupStyles.btn} type="submit">Sign up</button>
      </Form>
    </Formik>
  )
}
  