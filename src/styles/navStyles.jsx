import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: tomato;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;

  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  #site_title {
    font-size: 2rem;
    font-weight: 700;
  }

  form {
    width: 60%;
    input {
      font-size: 1.3rem;
      padding: 10px 15px;
      width: 100%;
      border-radius: 5px;
      border: none;
    }
  }

  .user {
    button {
      background-color: white;
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;
      border: none;
      font-weight: bold;

      &:hover {
        background-color: #d1cfcf;
      }
    }
  }

  @media (max-width: 650px) {
    padding: 10px 20px;

    #site_title {
      font-size: 1.5rem;
    }

    form {
      width: 40%;
      input {
        padding: 5px 10px;
      }
    }

    .user > button {
      padding: 5px;
    }
  }
`;
