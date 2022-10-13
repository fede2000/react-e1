import styled, { css } from 'styled-components';

export const TareaContainerStyled = styled.div`
  width: 50%;
  background-color: #cad2c5;
  padding: 10px;
  margin-top: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const TareaInputStyled = styled.input`
    line-height: 30px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
`;
export const TareaButtonAgregarStyled = styled.button`
    background-color: rgb(14, 160, 41);
    color: #fff;
    cursor: pointer;
    padding: 0 20px;
    border: 1px solid #fff;
    border-radius: 10px;
    transition: all .5s;
    margin-right: 10px;
    cursor: pointer;
    :hover{
        background-color: rgb(0, 129, 24);
        transform: scale(1.1);
    }
`;

export const TareaButtonEditarStyled = styled.button`
    background-color: #354f52;
    color: #fff;
    transition: all .5s;
    padding: 0 20px;
    border: 1px solid #fff;
    border-radius: 10px;
    transition: all .5s;
    margin-right: 10px;
    cursor: pointer;
    :hover{
        background-color: #354f98;
        transform: scale(1.1);
    }
`;
export const TareaButtonEliminarStyled = styled.button`
    background-color: rgb(160, 14, 14);
    color: #fff;
    transition: all .5s;
    padding: 0 20px;
    border: 1px solid #fff;
    border-radius: 10px;
    transition: all .5s;
    margin-right: 10px;
    cursor: pointer;
    :hover{
        background-color: rgb(188, 9, 9);
        transform: scale(1.1);
    }
`;