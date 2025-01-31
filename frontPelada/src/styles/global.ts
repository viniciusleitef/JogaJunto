import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --max-width: 1500px;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button, select {
        font-family: 'Poppins', serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
