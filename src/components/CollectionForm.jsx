import { useRef } from "react";
import readFile from "../utils/readFile";
import { FormDiv, FormInput, FormWrapper, SubmitBtn } from "../styles/styles";
import {
  languageDictionary,
  useLanguageContext,
} from "../contexts/LanguageContext";

const CollectionForm = ({ onFormSubmit }) => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const dateRef = useRef();

  const { language } = useLanguageContext();

  const onSubmit = async (e) => {
    e.preventDefault();
    const file = imageRef.current.files[0];
    if (file) {
      try {
        const image = await readFile(file);
        onFormSubmit(
          nameRef.current.value,
          descriptionRef.current.value,
          categoryRef.current.value,
          dateRef.current.value,
          image
        );
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  };

  return (
    <FormWrapper onSubmit={onSubmit}>
      <FormDiv>
        <label htmlFor="category">
          {languageDictionary[language].collectionCategory}:
          <select id="category" ref={categoryRef} defaultValue={"Books"}>
            <option value="Books">Books</option>
            <option value="Silverware">Silverware</option>
            <option value="Coins">Coins</option>
            <option value="Others">Others</option>
          </select>
        </label>
      </FormDiv>
      <FormDiv>
        <label htmlFor="collectioname">
          {languageDictionary[language].name}:
          <FormInput ref={nameRef} type="text" id="collectioname" />
        </label>
      </FormDiv>
      <FormDiv>
        <label htmlFor="collectioname">
          {languageDictionary[language].date}:
          <FormInput ref={dateRef} type="date" id="collectiodate" />
        </label>
      </FormDiv>
      <FormDiv>
        <label htmlFor="collectiondescription">
          {languageDictionary[language].description}:
        </label>
        <textarea ref={descriptionRef} type="text" id="collectiondescription" />
      </FormDiv>
      <FormDiv>
        <label htmlFor="imageInput">
          {languageDictionary[language].image}:
          <FormInput ref={imageRef} type="file" id="imageInput" />
        </label>
      </FormDiv>

      <SubmitBtn> {languageDictionary[language].add}</SubmitBtn>
    </FormWrapper>
  );
};
export default CollectionForm;
