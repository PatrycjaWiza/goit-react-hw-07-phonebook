import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
`;
export const Form = styled.form`
  border: solid 1px;
  max-width: 50vw;
  padding: 20px;

  & button {
    display: flex;
    margin-top: 20px;
    border: none;
    background: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 10px 20px;
    transition: background-color 500ms;
    border-radius: 5px;
    color: #4e5a65;

    &:hover {
      cursor: pointer;
      background: #7676ff;

    }
  }

  & input {
    margin: 10px 0;
    border-radius: 3px;
    border: 1px solid #4e5a65;
    padding: 10px;

  &:focus{
    border: none;
    outline: red;
    box-shadow: 0 0 5px 4px rgba(118, 118, 255, .5);
  }
`;
export const Title = styled.h2`
  margin: 10px auto;

  & ~ ul {
    margin: 0 20px 0;
    font-size: 20px;

    & > li {
      margin-bottom: 12px;
    }
  }
`;
export const Input = styled.input`
  margin: 10px 0;
  border-radius: 3px;
  border: 1px solid #4e5a65;
  padding: 10px;

  &:focus {
    border: none;
    outline: red;
    box-shadow: 0 0 5px 4px rgba(118, 118, 255, 0.5);
  }
`;
export const Button = styled.button`
  margin: 0 20px;
  border: none;
  background: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 5px 10px;
  transition: background-color 500ms;
  border-radius: 5px;
  color: #4e5a65;

  &:hover {
    cursor: pointer;
    background: #7676ff;
  }
`;
