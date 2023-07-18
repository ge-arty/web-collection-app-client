import { useRef } from "react";
import {
  FormDiv,
  FormInput,
  FormText,
  FormWrapper,
  SubmitBtn,
} from "../styles/styles";

const LoginForm = ({ onFormSubmit, message }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(emailRef.current.value, passwordRef.current.value);
  };
  return (
    <FormWrapper onSubmit={onSubmit}>
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

export default LoginForm;
