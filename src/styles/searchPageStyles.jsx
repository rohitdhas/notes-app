import styled from "styled-components";

export const SearchPage = styled.div`
  margin: 80px 40px 0;

  h3 {
    margin: 20px 0;
  }

  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
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
    margin: 10px 0;

    &:hover {
      cursor: pointer;
      background-color: #2352e0;
    }
  }
`;
