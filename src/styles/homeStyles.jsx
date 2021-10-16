import styled from "styled-components";

export const HomePage = styled.div`
  margin: 80px 40px 0;

  h2 {
    text-align: center;
    margin: 20px 0;
  }

  .notes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 20px;
    a {
      text-decoration: none;
      color: white;
      width: 100%;
      display: block;
    }
  }

  .note_card {
    height: 100px;
    width: 100%;
    border-radius: 5px;
    color: white;
    background-color: royalblue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    svg {
      margin: 10px 0;
    }

    &:hover {
      cursor: pointer;
      background-color: #2352e0;
    }
  }

  @media (max-width: 650px) {
    .notes {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const SignInPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 20px;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    border: none;
    background-color: royalblue;
    cursor: pointer;

    &:hover {
      background-color: #1b45c5;
    }
  }
`;
