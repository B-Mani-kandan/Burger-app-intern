import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p10bpeb",
        "template_hbu0ox7",
        form.current,
        "U7qXmq5dsCgtvSKj7"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} id="contactform" onSubmit={sendEmail}>
        <p className="contactus">Contact Us</p>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Last Name</label>
        <input type="text" name="user_last" />
        <label>Phone Number</label>
        <input type="number" name="user_phone" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        <a className="backhome" href={"/"}>
          Back to Home
        </a>
        <p></p>
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 100%;
  display: flex;
  background: url(../img/banner-bg.png);
  background-size: cover;
  justify-content: center;
  form {
    display: flex;
    position: relative;
    flex-direction: column;
    margin-top: 4%;
    width: 30%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    .backhome {
      padding: 1%;
      text-align: center;
      color: #fff;
      text-decoration: none;
      border: 1px solid rgb(249, 105, 14);
      border-radius: 5px;
      background: rgb(249, 105, 14);
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }
    .contactus {
      font-size: 20px;
      font-family: initial;
      font-weight: 600;
    }

    input[type="submit"] {
      margin-top: 1rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
      margin-bottom: 1rem;
    }
  }
`;
