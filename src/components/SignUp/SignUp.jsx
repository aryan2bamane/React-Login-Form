import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/fonts.css";

const Form = styled.form`
  @media screen and (max-width: 769px) {
    /* padding: 1rem; */
    /* height: 50vh; */
    width: 60vw;
    background: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  @media screen and (min-width: 769px) {
    padding: 1rem;
    height: 60vh;
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

  font-family: "Poppins", sans-serif;
`;
const Input = styled.input`
  /* border-radius: 20%; */

  @media screen and (max-width: 769px) {
    width: 90%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  @media screen and (min-width: 769px) {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
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

const Span = styled.span`
  color: blue;
`;
const Input2 = styled.input`
  border: 1px red solid;
`;

const Div1 = styled.div`
  width: 90%;
  gap: 0.5rem;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-direction: column;
  /* font-size: 14px; */
`;

const Div = styled.div`
  width: 90%;
  gap: 0.5rem;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  /* font-size: 14px; */
  color: gray;
`;

const Label = styled.p`
  /* font-size: 20px; */
  font-weight: 600;
`;

export default function SignUp() {
  return (
    <Form>
      <H1>Sign Up</H1>

      <Div1>
        <Label>Name</Label>
        <Input type="text" placeholder="Your Name" />

        <Label>Mail ID</Label>
        <Input type="mail" placeholder="Enter Mail ID" />

        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
        <Label>Confirm Password</Label>
        <Input type="password" placeholder="Confirm Password" />
      </Div1>

      <Div>
        <Input2 type="checkbox" />
        <span>
          I agree To <Span>Terms & Conditions</Span>{" "}
        </span>
      </Div>
      <Button type="Button">Sign Up</Button>
      <span>
        Already Have an Account?{" "}
        <Link id="link" to="/">
          <Span>Log In</Span>{" "}
        </Link>{" "}
        Here
      </span>
    </Form>
  );
}
