import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";

const StyledHeader = styled.header`
    background-color: #eeece7;
`;
const Logo = styled(Link)`
    color:#000000;
    text-decoration: none;
    font-weight: bold;

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 20px;
`;

const NavLink = styled(Link)`
    color:#000000;
    text-decoration: none;
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive,setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>Ecommerce</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>Inicio</NavLink>
            <NavLink href={'/products'}>Productos</NavLink>
            <NavLink href={'/categories'}>Categorias</NavLink>
            <NavLink href={'/account'}>Iniciar</NavLink>
            <NavLink href={'/cart'}>Tarjeta ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}