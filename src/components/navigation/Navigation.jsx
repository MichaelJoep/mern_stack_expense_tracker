import React from 'react'
import { styled } from 'styled-components';
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/icons';
import profile from "../../assets/pic3.png";

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 274px;
  height: 100%;
  background: #fff;
  border: 3px solid #fff;
  backdrop-filter: blur(4.5px);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1),
              -2px -2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;

`;

const UserContent = styled.div`
  display: flex;
  height: 100px;
  align-items:center;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit:cover;
  border: 4px solid #b1a2a8;
  padding: .05rem;
  box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleText = styled.h2`
  color: rgba(34, 34, 96, .6);
`;
const Text = styled.p`
  color: rgba(34, 34, 96, .5);
`;

const MenuItems = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: .6rem 0;
  padding-left: 1rem;
  position: relative;
  color: rgba(34, 34, 96, .6);
  transition: all .4s ease-in-out;
  cursor: pointer;
  font-weight: 500; 

`;
const SpanItem = styled.span``;

const NavSignOut = styled.div`
  display: flex;
`;

const SignoutList = styled.li`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  gap: 1rem;
  cursor: pointer;
  color: rgba(34, 34, 96, .6);
`;


const Navigation = ({active, setActive}) => {
  return (
    <NavStyled>
      <UserContent>
       <Avatar src={profile}/>
        <TextContainer>
          <TitleText>Mike</TitleText>
          <Text>Your Money</Text>
        </TextContainer>
      </UserContent>
      <MenuItems>
        {menuItems.map((item) => {
          return <ListItem key={item.id}
          onClick={()=> setActive(item.id)} >
            {item.icon}
            <SpanItem>{item.title}</SpanItem>
          </ListItem>
        })}
      </MenuItems>
      <NavSignOut>
        <SignoutList>
          {signout}Sign Out
        </SignoutList>
      </NavSignOut>
    </NavStyled>
  )
}

export default Navigation