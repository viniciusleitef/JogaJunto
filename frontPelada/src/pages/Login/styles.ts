import styled from "styled-components";

export const LoginContainer = styled.main`
    width: 100%;
    min-height: 100vh;

    display: flex;

    align-items: center;

    .imageBox{
        width: 50%;
        height: 100vh;
        background-color: black;
        border-right: 1px solid greenyellow;

        video{
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.4;
        }
    }

    .box{
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 1.5rem;
        text-align: center;
        margin: 0 auto;
        min-width: 20rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        form{
            display: flex;
            flex-direction: column;
            gap: 1rem;

            p{
                font-size: 0.725rem;
                color: rgb(10, 24, 54);
            }
        }
    }
`

export const LoginPageInput = styled.input`
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid greenyellow;
    background-color: white;
`

export const LoginPageButton = styled.button`
    padding: 0.5rem;
    border: none;
    background-color: rgb(173, 255, 47);
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;

    :hover{
        background-color: white;
        color: black;
    }
`