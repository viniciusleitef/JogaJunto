import styled from "styled-components";

export const HeroSection = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .centralizer{
        width: 100%;
        height: calc(100vh - var(--header-height) - var(--footer-height));
        max-width: var(--max-width);
        margin: 0 auto;
        padding: 0 2rem;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2.5rem;

        &>h1{
            max-width: 40rem;
            text-align: center;
            font-size: 3rem;
        }

        &>p{
            text-align: center;
            max-width: 40rem;
        }

        @media(max-width: 500px){
            &>h1{
                font-size: 2rem;
            }
        }

    }

    .buttonsBox{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        gap: 1rem;
    }
`