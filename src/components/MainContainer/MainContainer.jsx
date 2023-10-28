import styled from "styled-components";
import Login from "../Login/Login";
import { Outlet } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100vh;
`;

export const Left = styled.div`
  height: 40vh;
  width: 40vw;
  background: url("/login.svg") no-repeat center;
  margin: 0;
  background-size: contain;
`;
export const Right = styled.div`
  background-color: #fff;
  height: 60vh;
  border-radius: 5rem;
  padding: 2rem;
  margin: 0;
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;
function MainContainer() {
  return (
    <Container>
      <Left />

      <Outlet />
    </Container>
  );
}

export default MainContainer;
