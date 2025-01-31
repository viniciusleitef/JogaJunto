import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 1500px;
    height: 5rem;
    padding: 0 2rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f1f1f1;

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