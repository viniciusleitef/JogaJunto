import styled from 'styled-components';

export const CallToActionContainer = styled.section`
  width: 100%;
  min-height: fit-content;
  padding: 10rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  .centralizer {
    width: 100%;
    max-width: var(--max-width);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    padding: 0 2rem;
  }

  @media (max-width: 1000px) {
    .centralizer {
      flex-direction: column;
      gap: 5rem;
    }
  }
`;

export const CallToActionImg = styled.div`
  width: 50%;
  height: 500px;
  background-color: gray;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const CallToActionContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;

  h1 {
    font-size: 2.5rem;
  }

  p {
    text-align: center;
    max-width: 30rem;
  }
  .buttonsBox {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
