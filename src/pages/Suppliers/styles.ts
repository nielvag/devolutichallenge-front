import styled, { css } from 'styled-components';

interface ModalProps {
  showModal: boolean;
}

export const Container = styled.div`
  max-width: 1100px;
  margin: 54px auto 0;
  font-family: 'Montserrat', sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 28px;
  }

  button {
    background: #158467;
    border-radius: 5px;
    border: 0;
    padding: 10px 26px;
    color: #DDDDDD;
  }
`;

export const TableContainer = styled.section`
margin-top: 46px;
table {
  width: 100%;
  border-spacing: 0 26px;
  thead > tr {

    th {
      background: #CAFAED;
      border-radius: 5px 5px 0px 0px;
      padding: 15px 0;
      font-size: 16px;
      font-weight: 600;
      text-align: left;

      &:first-child {
        padding-left: 15px;
      }
    }
  }

  td {
    &:first-child {
      padding-left: 15px;
    }
  }

}
`;

export const Modal = styled.div<ModalProps>`
  background-color: #00000075;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  ${props =>
    props.showModal ?
      css`
        display: flex;
        align-items: center;
        justify-content: center;
      ` : 
      css` display: none; `
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #F0F0EF;
  border-radius: 5px;
  padding: 16px 24px 30px;

`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;

  h2 {
    font-size: 20px;
  }

  button {
    border: 0;
    font-size: 16px;
    color: #a2a2a2;
    background: #d9d9d9;
    font-weight: 500;
    border-radius: 10px;
    width: 20px;
    height: 20px;
  }
`;

export const ModalContent = styled.form`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;

  input {
    border-radius: 5px;
    height: 40px;
    margin: 8px;
    padding: 16px 10px;
    border: 1px solid #181818;
  }

  label {
    margin-left: 8px;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Cnpj = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;

  button {
    background: #158467;
    border-radius: 5px;
    border: 0;
    padding: 10px 26px;
    color: #DDDDDD;
  }
`;
