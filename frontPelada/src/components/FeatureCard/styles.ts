import { styled } from 'styled-components';

interface CardContentProps{
  pWidth?: number;
}

export const CardContainer = styled.div`
  max-width: 25rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;

  gap: 1rem;
`;

export const CardContent = styled.div<CardContentProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.8rem;
    width: ${props=>props.pWidth}px;
  }
`;

export const CardAction = styled.button`
  background-color: transparent;
  border: none;
  font-size: .9rem;
  background-color: aliceblue;
  padding: .5rem;
  border-radius: 2px;
  cursor: pointer;
`;
