/* eslint-disable */

import signinStyles from './signinpage.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createTodoFormValidationSchema } from './validator'

const initialValues = {
    email: '',
    password: '',
}

export function SigninPage() {
    const submitHandler = (values) => {
      console.log({ values })
    }
  
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={createTodoFormValidationSchema}
        onSubmit={submitHandler}
      >
        <Form className={signinStyles.form}>
          <Field className={signinStyles.input} name="email" placeholder="Email here" type="text" />
          <ErrorMessage component="p" className="error" name="title" />

          <Field className={signinStyles.input} name="password" placeholder="password here" type="text" />
          <ErrorMessage component="p" className="error" name="description" />
  
          <button className={signinStyles.btn} type="submit">Sign in</button>
        </Form>
      </Formik>
    )
}
  