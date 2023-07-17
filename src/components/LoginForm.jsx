import { FormDiv, FormInput, FormWrapper, SubmitBtn } from "../styles/styles";

const LoginForm = () => {
  return (
    <FormWrapper>
      <FormDiv>
        <label htmlFor="useremail">
          Email:
          <FormInput type="email" id="email" />
        </label>
      </FormDiv>
      <FormDiv>
        <label htmlFor="userpassword">
          Password:
          <FormInput type="password" id="userpassword" />
        </label>
      </FormDiv>

      <p>Text</p>
      <SubmitBtn>Submit</SubmitBtn>
    </FormWrapper>
  );
};

export default LoginForm;
