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

    .meta {
      span {
        font-weight: bold;
        font-size: 0.8rem;
        color: #555555;
      }

      #delete_btn,
      #edit_btn {
        margin-left: 20px;
        padding: 10px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        color: white;
        font-weight: bold;
      }

      #edit_btn {
        background-color: royalblue;
        &:hover {
          background-color: #2b57db;
        }
      }

      #delete_btn {
        background-color: tomato;
        &:hover {
          background-color: #ee4224;
        }
      }
    }
  }

  @media (max-width: 600px) {
    margin: 60px 10px 0;

    .note_title {
      .title {
        font-size: 1rem;
      }

      .meta > span {
        display: none;
      }
    }
  }
`;

export const LoadingText = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
