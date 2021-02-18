import styled from "styled-components";

const Button = styled.button`
  width: 176px;
  height: 44px;
  background: #ffffff;
  border: 2px solid #fc842d;
  box-sizing: border-box;
  border-radius: 30px;
  font-family: Verdana;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #fc842d;
  margin: 60px 0 0 0;
  outline: none;
  &:hover {
    background: #fc842d;
    color: white;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }
  @media screen and (max-width: 400px) {
    margin: 15px auto;
  }
`;

const Buttonn = ({ type, text }) => {
  return <Button type={type}>{text}</Button>;
};

export default Buttonn;
