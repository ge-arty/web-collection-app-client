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

const LoginForm = ({ onFormSubmit, message }) => {
  const { language } = useLanguageContext();

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
      <SubmitBtn>{languageDictionary[language].login}</SubmitBtn>
    </FormWrapper>
  );
};

export default LoginForm;
