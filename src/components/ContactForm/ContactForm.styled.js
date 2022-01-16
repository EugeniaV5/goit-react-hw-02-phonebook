import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 10px;
  outline: 1px solid black;
`;

export const Label = styled.p`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  /* width: 100%; */
  height: 20px;

  padding-left: 10px;
  margin-bottom: 10px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #76e8e0;
  }
`;

export const FormButton = styled.button`
  /* width: 200px; */
  height: 20px;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 0px 25px;
  background: transparent;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    color: #000;
    background-color: #ecf0f4;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  }
`;
