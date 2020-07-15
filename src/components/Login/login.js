import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../redux/actions/userAction";
import PropTypes from "prop-types";

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state.user);
  console.log(state);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [backendMSG, setBackendMSG] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_IP}/login`, {
      email: login,
      password: password,
    })
      .then((res) => {
        dispatch(
          userData(
            res.data.massege,
            res.data.firstName,
            res.data.lastName,
            res.data.id
          )
        );
        setBackendMSG(res.data.msg);
        if (res.data.massege) {
          history.push("/chat_dashboard");
        }
      })

      .catch((err) => console.log(err));
  };
  const routGotoRegistraction = () => {
    history.push("/registration");
  };

  return (
    <>
      <Contanier>
        <Form>
          <LoginParagraf>Login</LoginParagraf>
          <BackendNotificationData>{backendMSG}</BackendNotificationData>
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
          <Button onClick={handelSubmit}>Submit</Button>
          <RegisteredParagraf>
            Not registered?
            <CreateAccaount onClick={routGotoRegistraction}>
              create an account
            </CreateAccaount>
          </RegisteredParagraf>
        </Form>
      </Contanier>
    </>
  );
};

Login.propTypes = {
  userData: PropTypes.func,
};

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
  cursor: pointer;
`;

const CreateAccaount = styled.a`
  margin-left: 10px;
  color: #2a8bf2;
  text-decoration: none;
  background: none;
`;

const BackendNotificationData = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background: none;
  color: red;
  padding-bottom: 26px;
`;
