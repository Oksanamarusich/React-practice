import styled from 'styled-components';

export const Search = styled.form`
top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Button = styled.button`

display: inline-block;
  width: 31px;
  height: 31px;
  border: 0;
  margin-right: 1px;
  cursor: pointer;
  outline: none;
 
`;

export const Input = styled.input`

 display: inline-block;
  width: 50%;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 4px ;
  padding-left: 10px;
`;
