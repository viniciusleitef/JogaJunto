import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #1a1a1a;
    
    .centralizer{
        width: 100%;
        height: 10rem;
        max-width: var(--max-width);
        padding: 0 2rem;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .centralizer > p{
        margin-top: 2rem;
        width: 100%;
        font-size: .625rem;
    }

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-bottom: 1rem;
        border-bottom: 1px solid white;
    }
    
`
