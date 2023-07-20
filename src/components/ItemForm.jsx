import { useRef, useState } from "react";
import {
  DeleteBtn,
  FieldAddBtn,
  FieldsWrapper,
  FormDiv,
  FormInput,
  FormWrapper,
  SubmitBtn,
} from "../styles/styles";
import {
  languageDictionary,
  useLanguageContext,
} from "../contexts/LanguageContext";

const ItemForm = ({ onFormSubmit, item }) => {
  const { language } = useLanguageContext();

  const nameRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const [fields, setFields] = useState([{ key: "", value: "" }]);

  const handleFieldChange = (index, fieldKey, fieldValue) => {
    const updatedFields = [...fields];
    updatedFields[index] = { key: fieldKey, value: fieldValue };
    setFields(updatedFields);
  };

  const addField = () => {
    setFields([...fields, { key: "", value: "" }]);
  };

  const removeField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(
      nameRef.current.value,
      dateRef.current.value,
      descriptionRef.current.value,
      fields
    );
  };
  return (
    <FormWrapper onSubmit={onSubmit}>
      <FormDiv>
        <label htmlFor="item-name">
          {languageDictionary[language].name}:
          <FormInput
            defaultValue={item?.name}
            ref={nameRef}
            type="text"
            id="item-name"
          />
        </label>
      </FormDiv>
      <FormDiv>
        <label htmlFor="date">
          {languageDictionary[language].date}:
          <FormInput ref={dateRef} type="date" id="date" />
        </label>
      </FormDiv>
      <FormDiv>
        <label htmlFor="item-description">
          {languageDictionary[language].description}:
        </label>
        <textarea
          defaultValue={item?.description}
          ref={descriptionRef}
          type="description"
          id="description"
        />
      </FormDiv>
      {fields.map((field, index) => (
        <FieldsWrapper key={index}>
          <label htmlFor={`fieldKey${index}`}> </label>
          {languageDictionary[language].newFieldName}:
          <FormInput
            type="text"
            id={`fieldKey${index}`}
            value={field.key}
            onChange={(e) =>
              handleFieldChange(index, e.target.value, field.value)
            }
          />
          <label htmlFor={`fieldValue${index}`}> </label>
          {languageDictionary[language].newFieldValue}:
          <FormInput
            type="text"
            id={`fieldValue${index}`}
            value={field.value}
            onChange={(e) =>
              handleFieldChange(index, field.key, e.target.value)
            }
          />
          {fields.length > 1 && (
            <DeleteBtn type="button" onClick={() => removeField(index)}>
              {languageDictionary[language].removeField}
            </DeleteBtn>
          )}
        </FieldsWrapper>
      ))}

      <FieldAddBtn type="button" onClick={addField}>
        {languageDictionary[language].addNewField}
      </FieldAddBtn>

      <SubmitBtn> {languageDictionary[language].createItem}</SubmitBtn>
    </FormWrapper>
  );
};

export default ItemForm;
