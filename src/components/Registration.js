import React, { Component } from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import jsCookie from 'js-cookie'
import { Field, LargeButton, Box, Text, Heading } from '@hackclub/design-system'
import { theme } from 'theme'

const REQUIRED_STRING = 'required'
const INVALID_EMAIL_STRING = 'must be a valid email'

const DualField = styled(Box)`
  ${theme.mediaQueries.md} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${theme.space[3]}px;
  }
`

const FormField = styled(Field).attrs({ bg: 'white', mb: 3 })`
  font-family: ${theme.serif};
  border: 0 !important;
  &:focus {
    box-shadow: 0 0 0 1px ${theme.colors.primary};
  }
  ::placeholder {
    color: ${theme.colors.muted};
  }
`

const Explanation = styled(Text).attrs({
  fontSize: 1,
  color: 'slate',
  mt: -2,
  mb: 3
})``

const emoji = (
  <span role="img" aria-label="Celebration emoji">
    🎉
  </span>
)

const Submitted = () => (
  <Box align="center">
    <Heading.h2 fontSize={4}>Thanks for registering! {emoji}</Heading.h2>
    <Text fontSize={2}>You should receive a confirmation email shortly.</Text>
  </Box>
)

const SignedUp = ({ unsignup }) => (
  <Box align="center">
    <Heading.h2 fontSize={4}>You’ve already signed up! {emoji}</Heading.h2>
    <Text fontSize={3}>
      If this is an error,{' '}
      <a onClick={unsignup} href="#" children="click here" className="sans" />.
    </Text>
  </Box>
)

const schema = yup.object().shape({
  first_name: yup.string().required(REQUIRED_STRING),
  last_name: yup.string().required(REQUIRED_STRING),
  email: yup
    .string()
    .required(REQUIRED_STRING)
    .email(INVALID_EMAIL_STRING),
  phone_number: yup.string(),
  pronouns: yup.string().required(REQUIRED_STRING),
  school: yup.string().required(REQUIRED_STRING),
  grade: yup.string().required(REQUIRED_STRING),
  shirt_size: yup.string().required(REQUIRED_STRING),
  dietary_restrictions: yup.string(),
  travel: yup.string(),
  computer: yup.string(),
  emergency_email: yup
    .string()
    .required(REQUIRED_STRING)
    .email(INVALID_EMAIL_STRING),
  emergency_phone: yup.string().required(REQUIRED_STRING),
  note: yup.string(),
  referrer: yup.string().required(REQUIRED_STRING)
})

const formContent = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => {
  const field = name => ({
    name,
    value: values[name] === null ? '' : values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    error: touched[name] && errors[name]
  })
  return (
    <form onSubmit={handleSubmit}>
      <Box mb={3}>
        <Heading.h3>Attendee Information</Heading.h3>
        <Text>We can’t wait to meet you!</Text>
      </Box>
      <DualField>
        <FormField
          {...field('first_name')}
          label="First name"
          placeholder="Margaret"
        />
        <FormField
          {...field('last_name')}
          label="Last name"
          placeholder="Hamilton"
        />
        <FormField
          {...field('email')}
          type="email"
          label="Email"
          placeholder="margaret@windyhacks.com"
        />
        <FormField
          {...field('phone_number')}
          type="tel"
          label="Phone number"
          placeholder="312-555-5555"
        />
      </DualField>
      <FormField {...field('pronouns')} type="select" label="Pronouns">
        <option value="" default>
          Select pronouns
        </option>
        <option value="She/her">She/her</option>
        <option value="He/him">He/him</option>
        <option value="They/them">They/them</option>
        <option value="Other">Other</option>
        <option value="Prefer not to answer">Prefer not to answer</option>
      </FormField>
      <Explanation>
        Will be displayed on your badge. More info:{' '}
        <a
          href="https://en.wikipedia.org/wiki/Personal_pronoun"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia
        </a>
      </Explanation>
      <FormField
        {...field('school')}
        label="School"
        placeholder="Hacking High School"
      />
      <FormField {...field('grade')} type="select" label="Grade">
        <option value="" default>
          Select grade
        </option>
        <option value="Prev. 12th">Class of ’19 (Prev. 12th)</option>
        <option value="Incoming 12th">Class of ’20 (Incoming 12th)</option>
        <option value="Incoming 11th">Class of ’21 (Incoming 11th)</option>
        <option value="Incoming 10th">Class of ’22 (Incoming 10th)</option>
        <option value="Incoming 9th">Class of ’23 (Incoming 9th)</option>
        <option value="Incoming 8th">Class of ’24 (Incoming 8th)</option>
      </FormField>
      <Explanation>As of the 2019–20 school year.</Explanation>
      <FormField
        {...field('dietary_restrictions')}
        type="text"
        label="Dietary restrictions"
        placeholder="Vegetarian, gluten free, etc (optional)"
      />
      <FormField {...field('shirt_size')} type="select" label="Shirt size">
        <option value="" default>
          Select size
        </option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </FormField>
      <FormField {...field('travel')} type="select" label="Travel method">
        <option value="" default>
          Select travel plans
        </option>
        <option value="Attendee handles it">Handling my own travel</option>
        <option value="Interested in travel reimbursement">
          Interested in travel reimbursement
        </option>
      </FormField>
      <Explanation>
        If you select travel reimbursement, we’ll contact you later with
        details.
      </Explanation>
      <FormField {...field('computer')} type="select" label="Computer">
        <option value="" default>
          Select computer option
        </option>
        <option value="Attendee brings computer">
          Bringing my own computer
        </option>
        <option value="Needs a computer">In need of a provided computer</option>
      </FormField>
      <Explanation>
        Any kind of laptop or computer works—just let us know if you won’t have
        access to one for the event.
      </Explanation>
      <Box mt={[3, 4]} mb={3}>
        <Heading.h3>Emergency Contact Information</Heading.h3>
        <Text>
          In case of emergency, we need to be able to reach your
          parent/guardian/etc. No spam or newsletters.
        </Text>
      </Box>
      <FormField
        {...field('emergency_email')}
        type="text"
        label="Emergency contact email"
        placeholder="margaret@windyhacks.com"
      />
      <FormField
        {...field('emergency_phone')}
        type="tel"
        label="Emergency contact phone number"
        placeholder="773-555-5555"
      />
      <Heading.h3 mt={[3, 4]} mb={2}>
        Additional Details
      </Heading.h3>
      <FormField
        {...field('referrer')}
        label="How did you hear about us?"
        placeholder="Teacher, principal, friend’s name, etc"
      />
      <FormField
        {...field('note')}
        type="textarea"
        label="Questions, comments, etc"
        placeholder="Tell us your thoughts… (optional)"
      />
      <LargeButton
        mt={2}
        fontSize={[2, 3]}
        bg="alt"
        type="submit"
        onClick={handleSubmit}
        disabled={isSubmitting}
        scale
      >
        Claim my spot
      </LargeButton>
    </form>
  )
}

export default class Registration extends Component {
  state = {
    submitted: false
  }

  render() {
    const { submitted } = this.state
    const signedUp = jsCookie.get('signedUp')

    const unsignup = e => {
      e.preventDefault()
      jsCookie.remove('signedUp')
      this.forceUpdate()
    }

    return submitted ? (
      <Submitted />
    ) : signedUp ? (
      <SignedUp unsignup={unsignup} />
    ) : (
      <Formik
        render={formContent}
        validationSchema={schema}
        validateOnBlur
        onSubmit={(attendee, { setSubmitting }) => {
          setSubmitting(true)
          const ENDPOINT =
            'https://dash.zane.sh/api/v1/events/windy-city-hacks/attendees'
          axios.post(ENDPOINT, { attendee }).then(res => {
            setSubmitting(false)
            if (res.status === 200) {
              this.setState({ submitted: true })
              jsCookie.set('signedUp', 'true')

              const displayName = `${attendee.first_name} ${attendee.last_name}`
              const { email, school, grade, referrer } = attendee
              const profile = { displayName, email, school, grade, referrer }
              if (typeof FS !== 'undefined') FS.identify(email, profile)
            }
          })
        }}
      />
    )
  }
}
