import styled from "styled-components";

export const TeamCardContainer = styled.div`
    width: 100%;
    max-width: 12rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
`

export const TeamCardContentContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

    h3{
        font-size: 1rem;
        margin: 1rem 0 0;
    }

    p{
        font-size: .825rem;
    }
`

export const TeamCardIconsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const TeamCardIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`