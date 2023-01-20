/* eslint-disable */

import signupStyles from './signuppage.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createTodoFormValidationSchema } from './validator'

const initialValues = {
    email: '',
    group: 'sm9',
    password: '',
}

export function SignupPage() {
    const submitHandler = (values) => {
      console.log({ values })
    }
  
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={createTodoFormValidationSchema}
        onSubmit={submitHandler}
      >
        <Form className={signupStyles.form}>
          <Field className={signupStyles.input} name="email" placeholder="Email here" type="text" />
          <ErrorMessage component="p" className="error" name="title" />
  
          <Field className={signupStyles.input} name="group" placeholder="group here" type="text" />
          <ErrorMessage component="p" className="error" name="description" />

          <Field className={signupStyles.input} name="password" placeholder="password here" type="text" />
          <ErrorMessage component="p" className="error" name="description" />
  
          <button className={signupStyles.btn} type="submit">Sign up</button>
        </Form>
      </Formik>
    )
}
  