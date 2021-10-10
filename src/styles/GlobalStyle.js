import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.1rem;
    }

    body{
        background-color: #ff7f00;
        color: #ffff;
    }
`;

export default GlobalStyle;