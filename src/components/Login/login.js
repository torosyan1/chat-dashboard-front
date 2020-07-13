import React, { useState } from "react";
import styled from "styled-components";

const Contanier = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LoginParagraf = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background: none;
  font-size: 30px;
  margin-bottom: 30px;
  color: #707c97;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: auto;
  padding: 15px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: white;
  box-shadow: 23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02),
    35.0877px 0px 70px rgba(86, 128, 248, 0.05),
    14.0351px 0px 25px rgba(86, 128, 248, 0.03);
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  background: #ffffff;
  border-radius: 6px;
  margin-bottom: 30px;
  background: transparent;
  font-size: 15px;
  border: 0.8px solid rgb(102, 102, 102);
`;

const Button = styled.button`
  width: 103%;
  height: 50px;
  background: linear-gradient(100.61deg, #7cb8f7 0%, #2a8bf2 100%);
  border: 1px solid #ffffff;
  outline: none;
  box-sizing: border-box;
  box-shadow: 10px 6px 25px rgba(42, 139, 242, 0.15),
    4px 4px 25px rgba(42, 139, 242, 0.05), 6px 6px 25px rgba(42, 139, 242, 0.15);
  border-radius: 6px;
  color: white;
  cursor: pointer;
  &:focus {
    background: linear-gradient(100.61deg, #7cb8f7 100%, #2a8bf2 0%);
  }
`;

const RegisteredParagraf = styled.p`
  margin-top: 20px;
  margin-left: 20px;
  width: 100%;
  height: auto;
  background: none;
  color: #666666;
`;

const CreateAccaount = styled.a`
  margin-left: 10px;
  color: #2a8bf2;
  text-decoration: none;
  background: none;
`;

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Contanier>
        <Form>
          <LoginParagraf>Login</LoginParagraf>
          <Input
            value={login}
            type="text"
            placeholder="Login"
            onChange={(e) => setLogin(e.target.value)}
          />
          <Input
            value={password}
            type="Password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Submit</Button>
          <RegisteredParagraf>
            Not registered?
            <CreateAccaount href="/register">create an account</CreateAccaount>
          </RegisteredParagraf>
        </Form>
      </Contanier>
    </>
  );
};
