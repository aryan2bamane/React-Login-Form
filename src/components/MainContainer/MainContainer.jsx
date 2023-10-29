import styled from "styled-components";
import { Outlet } from "react-router-dom";



export const Left = styled.div`
  @media screen and (max-width: 768px) {
    height: 20vh;
    gap: 1rem;
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
