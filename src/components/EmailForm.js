import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import jsCookie from 'js-cookie'
import styled from 'styled-components'
import { Field, Flex, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import Action from 'components/Action'

const Layout = styled(Flex).attrs({
  flexDirection: ['column', 'row'],
  align: ['start', 'flex-end'],
  width: 1,
  wrap: true
})`
  max-width: 32rem;
  position: relative;

  label {
    flex: 1 1 auto;
    margin-bottom: 0;
    width: 100%;
  }

  input:focus {
    box-shadow: none;
  }

  a {
    flex-shrink: 0;
    margin-top: ${theme.space[3]}px;
  }

  ${theme.mediaQueries.md} {
    label {
      width: auto;
    }

    a {
      margin-left: ${theme.space[3]}px;
      margin-top: 0;
      line-height: 1.25;
    }
  }
`

export default class EmailForm extends React.Component {
  state = {
    submitted: false
  }

  render() {
    const { submitted } = this.state
    const emailSignup = jsCookie.get('emailSignup')

    return submitted ? (
      <Text mt={4} color="slate" fontSize={4}>
        Thanks! We’ll notify you when <strong>registration opens</strong>.{' '}
        <span role="img" aria-label="Blue heart emoji">
          💙
        </span>
      </Text>
    ) : (
      !emailSignup && (
        <Formik
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .required('required')
              .email('must be a valid email')
          })}
          validateOnChange={false}
          onSubmit={({ email }, { setSubmitting }) => {
            setSubmitting(true)
            axios
              .post('https://usebasin.com/f/1888b2958a56', { email })
              .then(res => {
                setSubmitting(false)
                if (res.status === 200) {
                  this.setState({ submitted: true })
                  jsCookie.set('emailSignup', 'true')
                }
              })
          }}
        >
          {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Text color="slate" bold fontSize={[3, 4]} mb={3}>
                Sign up now & we’ll notify you when registration opens.
              </Text>
              <Layout>
                <Field
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="amanda@windyhacks.com"
                  error={errors.email}
                  value={values.email}
                  onChange={handleChange}
                  fontSize={3}
                />
                <Action
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  py={2}
                  px={3}
                >
                  Get notified
                </Action>
              </Layout>
            </form>
          )}
        </Formik>
      )
    )
  }
}
