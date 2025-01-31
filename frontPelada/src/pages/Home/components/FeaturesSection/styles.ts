import styled from 'styled-components';

export const FeatureSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: fit-content;
  padding: 10rem 0;
  background-color: #f5f5f5;

  .centralizer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 1.5rem;
    max-width: var(--max-width);
    width: 100%;
    padding: 0 2rem;
  }

  .centralizer > h1{
    text-align: center;
    max-width: 40rem;
    margin-bottom: 4rem;
    font-size: 2rem;
  }

  .cardsBox{
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    
  }
`;
