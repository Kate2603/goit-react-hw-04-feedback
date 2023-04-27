import styled from 'styled-components';

export const ButtonsBox = styled.div`
  display: flex;
  margin-left: auto;
  gap: 15px;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: 18px;
  background-color: #35E8E8;
  border: 1px solid #35E8E8;
  border-radius: 5px;
  font-weight: 400;
  font-height: 400;
  padding: 10px 30px;
  color: darkgreen;
  box-shadow: 0 0 5px #45C4CD;

  &:hover {
    cursor: pointer;
    color: teal;
    background-color: #A9F5F9;
    border: 1px solid #A9F5F9;
  }
  &:active {
    background-color: teal;
  }
`;
