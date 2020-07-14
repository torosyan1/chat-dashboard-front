import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useHistory } from "react-router-dom";

export const Registration = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [backendData, setBackendData] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_IP}/registration`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((res) => setBackendData(res.data.msg))
      .catch((error) => console.log(error));
    console.log(process.env.REACT_APP_IP);
  };

  if (backendData === "Successfull") {
    setTimeout(() => {
      history.push("/");
    }, 2000);
  }

  return (
    <>
      <Contanier>
        {backendData === "Successfull" ? (
          <Overlay>
            <SuccessAlert>
              <CheckCircleIcon style={{ color: "green" }} />
              {backendData}
            </SuccessAlert>
          </Overlay>
        ) : (
          <Form onSubmit={handelSubmit}>
            <RegistrationParagraf>Registration</RegistrationParagraf>
            <BackendDataMsg>{backendData}</BackendDataMsg>
            <Input
              value={firstName}
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              value={lastName}
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              value={email}
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button>Submit</Button>
            <GoToSignIn href="/">Sign In</GoToSignIn>
          </Form>
        )}
      </Contanier>
    </>
  );
};

const Contanier = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const RegistrationParagraf = styled.p`
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
  z-index: 0;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 10px;
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
const BackendDataMsg = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  color: red;
  background: none;
  padding: 10px;
`;

const Overlay = styled.div`
  align-items: center;
  justify-content: center;
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;
  cursor: pointer;
`;

const SuccessAlert = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
  height: 30%;
  border-radius: 10px;
  padding: 10px 10px;
`;

const GoToSignIn = styled.a`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  color: #2a8bf2;
  text-decoration: none;
  background: none;
  padding-top: 20px;
`;
