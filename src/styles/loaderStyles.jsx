import styled from "styled-components";

export const Box = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #00000092;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  &.active {
    display: flex;
  }
`;

export const Spinner = styled.div`
  height: 80px;
  width: 80px;
  border: 5px solid darkgray;
  border-top: 5px solid tomato;
  border-radius: 50%;
  animation: loader 0.6s infinite;

  @keyframes loader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
