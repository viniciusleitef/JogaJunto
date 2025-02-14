import styled from 'styled-components';

export const CreateGameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const CreateGameBox = styled.div`
  width: 50%;
  height: 50%;
  max-width: 55rem;
  max-height: 50rem;
  min-width: 20rem;
  background-color: white;
  border-radius: 5px;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
      text-align: center;
    }

    .input-box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.5rem;

      input {
        width: fit-content;
        border: none;
        font-size: 0.75rem;
        padding: 0.5rem;
        background-color: #f5f5f5;
        border-radius: 5px;
      }

      span{
        height: 1rem;
        font-size: 0.75rem;
      }
    }

    .buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`;
