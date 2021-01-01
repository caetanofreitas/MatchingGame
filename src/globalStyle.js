import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        outline: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    html,
    body,
    #root {
        min-height: 100vh;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 3%;
        width: 100%;

        h1 {
            margin-bottom: 15px;
        }

        input,
        select {
            border: none;
            box-shadow: 0 3px 6px 5px rgba(0, 0, 0, 0.15);
            padding: 10px 15px;
            font-size: 1.2rem;
            border-radius: 10px;
            margin: 20px 0;
        }
    }
`;
