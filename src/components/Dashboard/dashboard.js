import React from "react";
import styled from "styled-components";
import { TopMenu } from "./topmenu";
import { AllChat } from "./allchats";

export const Dashboard = () => {
  return (
    <>
      <Contener>
        <TopMenu />
        <AllChat />
      </Contener>
    </>
  );
};

const Contener = styled.div`
  display: flex;
  flex-direction: row;
`;
