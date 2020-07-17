import React from "react";
import styled from "styled-components";
import ChevronDown from "../../assets/icones/chevron-down.svg";
import ProfilImg from "../../assets/Profil photo/Profil_Photo.jpg";
import ContactIcone from "../../assets/icones/contact.svg";
import HomeIcone from "../../assets/icones/home.svg";
import NotificationIcone from "../../assets/icones/notification.svg";
import settingsIcone from "../../assets/icones/settings.svg";
import CalendarIcone from "../../assets/icones/calendar.svg";
export const TopMenu = () => {
  const menuList = [
    {
      text: "home",
      icone: HomeIcone,
    },
    {
      text: "chat",
      icone: HomeIcone,
    },
    {
      text: "contact",
      icone: ContactIcone,
    },
    {
      text: "notification",
      icone: NotificationIcone,
    },
    {
      text: "calendar",
      icone: CalendarIcone,
    },
    {
      text: "settings",
      icone: settingsIcone,
    },
  ];
  return (
    <>
      <Rectangle>
        <Menu>
          <UserDataContener>
            <ProfilPhoto src={ProfilImg} alt="loading" />
            <UserFullName>
              Vahag Torosyan{" "}
              <ChevronDownIcone src={ChevronDown} alt="loading" />
            </UserFullName>
          </UserDataContener>
          <MenueListContener>
            {menuList.map((el, index) => {
              return (
                <ItemsList>
                  <ItemsListImg src={el.icone} />
                  {el.text}
                </ItemsList>
              );
            })}
          </MenueListContener>
        </Menu>
      </Rectangle>
    </>
  );
};

const Rectangle = styled.div`
  position: fixed;
  width: 290px;
  height: 100%;
  background: #ffffff;
  box-shadow: 23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02),
    35.0877px 0px 70px rgba(86, 128, 248, 0.05),
    14.0351px 0px 25px rgba(86, 128, 248, 0.03);
`;

const Menu = styled.div`
  position: absolute;
  width: 242px;
  height: auto;
  left: 0px;
  top: 87px;
  background: none;
`;
const UserDataContener = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: none;
`;
const ProfilPhoto = styled.img`
  width: 96px;
  height: 96px;
  left: 97px;
  top: 87px;
  border-radius: 60px;
`;

const UserFullName = styled.p`
  padding-top: 10px;
  background: none;
`;

const ChevronDownIcone = styled.img`
  padding-left: 3px;
  width: 19px;
  height: 19px;
  background: none;
`;
const MenueListContener = styled.ul`
  display: flex;
  flex-direction: column;

  height: 415px;
  list-style: none;
  background: none;
`;
const ItemsList = styled.li`
  display: flex;
  align-items: center;
  margin-top: 35px;
  width: 126px;
  height: 40px;
  padding-left: 26px;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 19px;
  color: #707c97;
  cursor: pointer;
  border-left-color: 15px solid coral;
  background: none;
  &:hover {
    border-left: 3px solid #2a8bf2;
    box-shadow: 4px rgba(42, 139, 242, 0.75), 0px rgba(42, 139, 242, 0.55),
      1px rgba(42, 139, 242, 0.45);
    color: #2a8bf2;
  }
`;
const ItemsListImg = styled.img`
  width: 24px;
  height: 24px;
  background: none;
  padding-right: 17px;
`;
