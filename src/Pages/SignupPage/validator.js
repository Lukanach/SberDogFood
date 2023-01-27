/* eslint-disable */

import * as Yup from 'yup'

export const createSignupFormValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  group: Yup.string()
    .max(4, 'Must be 4 characters or less')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
})