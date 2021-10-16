import styled from "styled-components";

export const EditorPage = styled.div`
  margin: 80px 40px 0;

  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 15px;
      border: none;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }

    #discard_btn {
      background-color: tomato;

      &:hover {
        background-color: #d43b20;
      }
    }

    #save_btn {
      background-color: royalblue;
      &:hover {
        background-color: #214ac5;
      }
    }
  }

  input {
    display: block;
    width: 80%;
    padding: 20px;
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    outline: none;
  }

  textarea {
    display: block;
    width: 70%;
    height: 70vh;
    padding: 20px;
    font-size: 1.1rem;
    border: none;
    outline: none;
  }
`;
