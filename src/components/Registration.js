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

const Submitted = () => (
  <Box align="center">
    <Text fontSize={4} bold>
      Thanks for registering!{' '}
      <span role="img" aria-label="Celebration emoji">
        🎉
      </span>
    </Text>
    <Text fontSize={2}>You should receive a confirmation email shortly.</Text>
  </Box>
)

const SignedUp = ({ unsignup }) => (
  <Box align="center">
    <Text fontSize={4} bold>
      You’ve already signed up!{' '}
      <span role="img" aria-label="Celebration emoji">
        🎉
      </span>
    </Text>
    <Text fontSize={3}>
      If this is an error,{' '}
      <a onClick={unsignup} href="#" children="click here" />.
    </Text>
  </Box>
)

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
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          pronouns: '',
          school: '',
          grade: '',
          shirt_size: '',
          dietary_restrictions: '',
          travel: '',
          computer: '',
          emergency_email: '',
          emergency_phone: '',
          note: '',
          referrer: ''
        }}
        validationSchema={yup.object().shape({
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
        })}
        validateOnChange={false}
        onSubmit={(attendee, { setSubmitting }) => {
          setSubmitting(true)
          axios
            .post(
              'https://dash.zane.sh/api/v1/events/windy-city-hacks/attendees',
              {
                attendee
              }
            )
            .then(res => {
              setSubmitting(false)
              if (res.status === 200) {
                this.setState({ submitted: true })
                jsCookie.set('signedUp', 'true')

                /* eslint-ignore */
                FS.identify(attendee.email, {
                  displayName: `${attendee.first_name} ${attendee.last_name}`,
                  email: attendee.email,
                  school: attendee.school,
                  grade: attendee.grade,
                  referrer: attendee.referrer
                })
              }
            })
        }}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <Heading.h3>Attendee Information</Heading.h3>
              <Text>We can’t wait to meet you!</Text>
            </Box>
            <DualField>
              <FormField
                type="text"
                name="first_name"
                label="First name"
                placeholder="Margaret"
                error={errors.first_name}
                value={values.first_name}
                onChange={handleChange}
              />
              <FormField
                type="text"
                name="last_name"
                label="Last name"
                placeholder="Hamilton"
                error={errors.last_name}
                value={values.last_name}
                onChange={handleChange}
              />
              <FormField
                type="email"
                name="email"
                label="Email"
                placeholder="margaret@windyhacks.com"
                error={errors.email}
                value={values.email}
                onChange={handleChange}
              />
              <FormField
                type="tel"
                name="phone_number"
                label="Phone number"
                placeholder="312-555-5555"
                error={errors.phone_number}
                value={values.phone_number}
                onChange={handleChange}
              />
            </DualField>
            <FormField
              type="select"
              name="pronouns"
              label="Pronouns"
              error={errors.pronouns}
              value={values.pronouns}
              onChange={handleChange}
            >
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
              type="text"
              name="school"
              label="School"
              placeholder="Hacking High School"
              error={errors.school}
              value={values.school}
              onChange={handleChange}
            />
            <FormField
              type="select"
              name="grade"
              label="Grade"
              error={errors.grade}
              value={values.grade}
              onChange={handleChange}
            >
              <option value="" default>
                Select grade
              </option>
              <option value="8">8th (Class of ’23)</option>
              <option value="9">9th (Class of ’22)</option>
              <option value="10">10th (Class of ’21)</option>
              <option value="11">11th (Class of ’20)</option>
              <option value="12">12th (Class of ’19)</option>
            </FormField>
            <Explanation>As of the 2018–19 school year.</Explanation>
            <FormField
              type="text"
              name="dietary_restrictions"
              label="Dietary restrictions"
              placeholder="Vegetarian, gluten free, etc (optional)"
              error={errors.dietary_restrictions}
              value={values.dietary_restrictions}
              onChange={handleChange}
            />
            <FormField
              type="select"
              name="shirt_size"
              label="Shirt size"
              error={errors.shirt_size}
              value={values.shirt_size}
              onChange={handleChange}
            >
              <option value="" default>
                Select size
              </option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </FormField>
            <FormField
              type="select"
              name="travel"
              label="Travel method"
              error={errors.travel}
              value={values.travel}
              onChange={handleChange}
            >
              <option value="" default>
                Select travel plans
              </option>
              <option value="Attendee handles it">
                Handling my own travel
              </option>
              <option value="Interested in travel reimbursement">
                Interested in travel reimbursement
              </option>
            </FormField>
            <Explanation>
              If you select travel reimbursement, we’ll contact you later with
              details.
            </Explanation>
            <FormField
              type="select"
              name="computer"
              label="Computer"
              error={errors.computer}
              value={values.computer}
              onChange={handleChange}
            >
              <option value="" default>
                Select computer option
              </option>
              <option value="Attendee brings computer">
                Bringing my own computer
              </option>
              <option value="Needs a computer">
                In need of a provided computer
              </option>
            </FormField>
            <Explanation>
              Any kind of laptop or computer works—just let us know if you won’t
              have access to one for the event.
            </Explanation>
            <Box mt={[3, 4]} mb={3}>
              <Heading.h3>Emergency Contact Information</Heading.h3>
              <Text>
                In case of emergency, we need to be able to reach your
                parent/guardian/etc. No spam or newsletters.
              </Text>
            </Box>
            <FormField
              type="text"
              name="emergency_email"
              label="Emergency contact email"
              placeholder="margaret@windyhacks.com"
              error={errors.emergency_email}
              value={values.emergency_email}
              onChange={handleChange}
            />
            <FormField
              type="tel"
              name="emergency_phone"
              label="Emergency contact phone number"
              placeholder="773-555-5555"
              error={errors.emergency_phone}
              value={values.emergency_phone}
              onChange={handleChange}
            />
            <Heading.h3 mt={[3, 4]} mb={2}>
              Additional Details
            </Heading.h3>
            <FormField
              type="text"
              name="referrer"
              label="How did you hear about us?"
              placeholder="Teacher, principal, friend’s name, etc"
              error={errors.referrer}
              value={values.referrer}
              onChange={handleChange}
            />
            <FormField
              type="textarea"
              name="note"
              label="Questions, comments, etc"
              placeholder="Tell us your thoughts… (optional)"
              error={errors.note}
              value={values.note}
              onChange={handleChange}
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
        )}
      </Formik>
    )
  }
}
