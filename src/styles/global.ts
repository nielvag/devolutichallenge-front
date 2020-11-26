import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #E5E5E5 ;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font-family: 16px 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
