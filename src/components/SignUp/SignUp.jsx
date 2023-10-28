import { Link } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  @media screen and (max-width: 768px) {
    /* padding: 1rem; */
    /* height: 50vh; */
    width: 90vw;
    background: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  @media screen and (min-width: 768px) {
    padding: 1rem;
    height: 50vh;
    width: 30vw;
    background: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const Input = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 70%;
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
`;

export default function SignUp() {
  return (
    <Form>
      <h1>Sign Up</h1>
      <Input type="text" placeholder="Your Name" />
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />

      <Button type="Button">SignUp</Button>
      <span>
        Already Have an Account?{" "}
        <Link id="redirect" to="/">
          Log In{" "}
        </Link>{" "}
        Here
      </span>
    </Form>
  );
}
