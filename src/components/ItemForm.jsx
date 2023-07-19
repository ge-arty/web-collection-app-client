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

const ItemForm = ({ onFormSubmit, item }) => {
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
          Name:
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
          Date
          <FormInput ref={dateRef} type="date" id="date" />
        </label>
      </FormDiv>
      <FormDiv>
        <label htmlFor="item-description">Description </label>
        <textarea
          defaultValue={item?.description}
          ref={descriptionRef}
          type="description"
          id="description"
        />
      </FormDiv>
      {fields.map((field, index) => (
        <FieldsWrapper key={index}>
          <label htmlFor={`fieldKey${index}`}>
            Name
            <FormInput
              type="text"
              id={`fieldKey${index}`}
              value={field.key}
              onChange={(e) =>
                handleFieldChange(index, e.target.value, field.value)
              }
            />
          </label>

          <label htmlFor={`fieldValue${index}`}>
            Value
            <FormInput
              type="text"
              id={`fieldValue${index}`}
              value={field.value}
              onChange={(e) =>
                handleFieldChange(index, field.key, e.target.value)
              }
            />
          </label>

          {fields.length > 1 && (
            <DeleteBtn type="button" onClick={() => removeField(index)}>
              Remove Field
            </DeleteBtn>
          )}
        </FieldsWrapper>
      ))}

      <FieldAddBtn type="button" onClick={addField}>
        Add Field
      </FieldAddBtn>

      <SubmitBtn>Submit</SubmitBtn>
    </FormWrapper>
  );
};

export default ItemForm;
