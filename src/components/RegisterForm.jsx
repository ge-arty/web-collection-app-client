import { FormDiv, FormInput, FormWrapper, SubmitBtn } from "../styles/styles";

const RegisterForm = () => {
  return (
    <FormWrapper>
      <FormDiv>
        <label htmlFor="username">
          Username:
          <FormInput type="text" id="username" />
        </label>
      </FormDiv>
      <FormDiv>
        <label htmlFor="userpassword">
          Password:
          <FormInput type="password" id="userpassword" />
        </label>
      </FormDiv>
      <FormDiv>
        <label htmlFor="useremail">
          Email:
          <FormInput type="email" id="email" />
        </label>
      </FormDiv>
      <p>Text</p>
      <SubmitBtn>Submit</SubmitBtn>
    </FormWrapper>
  );
};
export default RegisterForm;
