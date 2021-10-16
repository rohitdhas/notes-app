import styled from "styled-components";

export const ViewerPage = styled.div`
  margin: 90px 40px 0;

  .note_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;

    .title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .time > button {
      margin-left: 20px;
      padding: 10px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      background-color: tomato;

      &:hover {
        background-color: #ee4224;
      }
    }
  }
`;

export const LoadingText = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
