import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <Navigation>
          <NavList>
            <NavItem>
              <NavLinkStyle end to="/cats">
                Все котики
              </NavLinkStyle>
            </NavItem>
            <NavItem>
              <NavLinkStyle to="/favorites-cats">Любимые котики</NavLinkStyle>
            </NavItem>
          </NavList>
        </Navigation>
      </Container>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  background-color: var(--color-blue);
  box-shadow: var(--box-shadow);
`;

const Navigation = styled.nav``;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li``;

const NavLinkStyle = styled(NavLink)`
  display: block;
  padding: 1.5rem 1.75rem;
  color: var(--color-white);
  opacity: 0.7;
  font-size: var(--fs-sm);
  font-weight: var(--fw-regular);
  text-decoration: none;
  transition: var(--transition);
  line-height: var(--line-height);
  letter-spacing: var(--letter-spacing);
  &:hover {
    background-color: var(--color-hover);
    opacity: 1;
  }
  &.active {
    background-color: var(--color-hover);
    opacity: 1;
  }

  @media (max-width: 576px) {
    padding: 1rem 1.25rem;
  }
`;
