import styled from 'styled-components';

export const OurTeamContainer = styled.section`
  width: 100%;
  min-height: fit-content;
  padding: 10rem 0;
  background: #f5f5f5;

  display: flex;
  justify-content: center;
  align-items: center;

  .centralizer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8rem;

    width: 100%;
    max-width: var(--max-width);
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 0.825rem;
    }
  }

  .teamBox {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;
