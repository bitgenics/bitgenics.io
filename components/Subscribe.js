import React, { Component, Fragment } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import styled from "styled-components"

const EmailInput = styled.input`
  width: 100%;
  padding: 6.5px 13px;
  font-size: 14px;
  border: 1px solid #abb0b2;
  border-radius: 3px;
  box-sizing: border-box;
`

const Label = styled.label`
  font-size: 12px;
`

const SubHeader = styled.h2`
  font-size: 19.6px;
`

const Button = styled.button`
  clear: both;
  background-color: #aaa;
  border: 0 none;
  border-radius: 4px;
  transition: all 0.23s ease-in-out 0s;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: normal;
  height: 32px;
  line-height: 32px;
  margin: 10px 5px 10px 0;
  padding: 0 22px;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
  width: auto;
`

const CustomForm = ({ status, message, onValidated }) => {
  let email
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    })

  return (
    <Fragment>
      <SubHeader>Subscribe to our mailing list</SubHeader>
      <Label>Email Address</Label>
      <EmailInput
        innerRef={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && <div style={{ color: "green" }}>{message}</div>}
      <Button onClick={submit}>Submit</Button>
    </Fragment>
  )
}

class Subscribe extends Component {
  render() {
    const url =
      "https://bitgenics.us14.list-manage.com/subscribe/post?u=11d03680b2addc485abad93ba&amp;id=360a34c76d"
    return (
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    )
  }
}

export default Subscribe
