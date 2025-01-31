import styled from "styled-components";

export const FaqContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: fit-content;
    padding: 10rem 0;

    .centralizer{
        width: 100%;
        max-width: var(--max-width);
        padding: 0 1.5rem;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    header{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
        margin-bottom: 3rem;
    }

    header > h1{
        font-size: 3rem;
    }

    footer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1.5rem;

        max-width: 20rem;
        text-align: center;
        margin-top: 3.5rem;
    }
`

export const FaqCard = styled.div`
    width: 100%;
    max-width: 800px;
    border-top: 1px solid black;
    padding: 1.25rem 0;

    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 1.25rem;

    h3{
        font-size: 1rem;
    }

    p{
        font-size: .825rem;
    }

    &:last-child {
        border-bottom: 1px solid black;
    }
`