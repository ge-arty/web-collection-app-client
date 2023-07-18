import { useRef } from "react";
import {
  FormDiv,
  FormInput,
  FormText,
  FormWrapper,
  SubmitBtn,
} from "../styles/styles";

const RegisterForm = ({ onFormSubmit, message }) => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(
      usernameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    );
  };
  return (
    <FormWrapper onSubmit={onSubmit}>
      <FormDiv>
        <label htmlFor="username">
          Username:
          <FormInput ref={usernameRef} type="text" id="username" />
        </label>
      </FormDiv>
      <FormDiv>
        <label htmlFor="useremail">
          Email:
          <FormInput ref={emailRef} type="email" id="email" />
        </label>
      </FormDiv>
      <FormDiv>
        <label htmlFor="userpassword">
          Password:
          <FormInput ref={passwordRef} type="password" id="userpassword" />
        </label>
      </FormDiv>

      <FormText>{message}</FormText>
      <SubmitBtn>Submit</SubmitBtn>
    </FormWrapper>
  );
};
export default RegisterForm;
