import { styled } from 'styled-components';

interface ButtonProps {
    background?: string
    color?: string
}

export const HeroSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 5rem 0 10rem;
  min-height: fit-content;

  .centralizer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    max-width: var(--max-width);
    width: 100%;
    padding: 0 2rem;
  }

  @media(max-width: 1000px){
    height: 70rem;

    .centralizer{
      flex-direction: column;
      gap: 5rem;
    }
  }
`;

export const HeroSectionText = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 1.5rem;
  width: 50%;

  h1 {
    font-size: 3rem;
  }

  p{
    max-width: 80%;
    font-size: 0.8rem;
  }
  .buttonsBox{
    display: flex;
    gap: 1rem;
  }

  @media(max-width: 1000px){
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const HeroSectionImg = styled.div`
  width: 50%;
  height: 500px;
  background: gray;

  @media(max-width: 1000px){
    width: 100%;
  }
`;

export const Button = styled.button<ButtonProps>`

  background-color: ${props=> props.background || `transparent`};
  color: ${props=>props.color || `white`};
  border: 1px solid black;
  border-radius: 1px;
  padding: 12px 20px;
  font-size: 0.8rem;
  cursor: pointer;
`;
