import styled from "styled-components";
import { Outlet } from "react-router-dom";

export const Container = styled.div`
  @media (min-width: 601px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 2rem;
    height: 100vh;
  }
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* gap: 2rem; */
  }
  border: 1px solid red;
`;

export const Left = styled.div`
  @media screen and (max-width: 768px) {
    height: 40vh;
    width: 30vw;
    background: url("/login.svg") no-repeat center;
    margin: 0;
    background-size: contain;
  }
  @media screen and (min-width: 767px) {
    height: 40vh;
    width: 30vw;
    background: url("/login.svg") no-repeat center;
    margin: 0;
    background-size: contain;
  }
`;

function MainContainer() {
  return (
    <>
      <Left />

      <Outlet />
    </>
  );
}

export default MainContainer;
