import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f1f1f1;
    
    .centralizer{
        width: 100%;
        max-width: var(--max-width);
        margin: 0 auto;
        padding: 0 2rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    nav{
        display: flex;
        gap: 1.5rem;
    }

    .join{
        display: flex;
        align-items: center;
        justify-content: center;
        
        background-color: black;
        border-radius: 2px;
        padding: 10px 20px;
        color: white;
        cursor: pointer;
    }

    .responsiveMenu{
        display: none;
        justify-content: center;
        align-self: center;
        cursor: pointer;
    }

    @media (max-width: 900px){
        nav{
            display: none;
        }

        .join{
            display: none;
        }

        .responsiveMenu{
            display: flex;
        }
    }
`