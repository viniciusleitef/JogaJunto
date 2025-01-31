import styled from 'styled-components';

export const JoinUsSectionContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 0;
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

  .header {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 1rem;
  }

  .header > h1 {
    font-size: 1.8rem;
  }

  .header > p {
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    .centralizer {
      flex-direction: column;
      gap: 5rem;
    }
  }
`;

export const JoinUsSectionContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 2rem;

  .cardsBox {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    gap: 2rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    .cardsBox{
      flex-wrap: wrap;
    }
  }
`;

export const JoinUsSectionImg = styled.div`
  width: 50%;
  height: 500px;
  background: gray;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
