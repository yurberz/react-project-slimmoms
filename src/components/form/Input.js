import styled from "styled-components";

const FormInput = styled.input`
  border-bottom: 1px solid #e0e0e0;
  border-top: none;
  border-right: none;
  border-left: none;
  padding: 15px;
  width: 239px;
  font-family: Verdana;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  outline: none;
  background-color: white;
  &:focus {
    background-color: white;
    border-bottom: 1px solid #e0e0e0;
    border-top: none;
    border-right: none;
    border-left: none;
    color: #9b9faa;
  }
  &:invalid {
    border-bottom: 2px solid red;
  }
`;

const Inputt = ({ text, placeholder, name, onChange, value }) => {
  console.log(placeholder);
  return (
    <FormInput
      type={text}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default Inputt;
