import { useRef } from "react";
import {
  FormDiv,
  FormInput,
  FormText,
  FormWrapper,
  SubmitBtn,
} from "../styles/styles";
import {
  languageDictionary,
  useLanguageContext,
} from "../contexts/LanguageContext";

const RegisterForm = ({ onFormSubmit, message }) => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { language } = useLanguageContext();

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
          {languageDictionary[language].login}:
          <FormInput ref={usernameRef} type="text" id="username" />
        </label>
      </FormDiv>
      <FormDiv>
        <label htmlFor="useremail">
          {languageDictionary[language].email}:
          <FormInput ref={emailRef} type="email" id="email" />
        </label>
      </FormDiv>
      <FormDiv>
        <label htmlFor="userpassword">
          {languageDictionary[language].password}:
          <FormInput ref={passwordRef} type="password" id="userpassword" />
        </label>
      </FormDiv>

      <FormText>{message}</FormText>
      <SubmitBtn> {languageDictionary[language].register}</SubmitBtn>
    </FormWrapper>
  );
};
export default RegisterForm;
