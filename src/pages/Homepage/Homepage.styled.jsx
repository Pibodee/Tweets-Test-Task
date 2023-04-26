import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 50px;
  text-decoration: none;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  padding: 10px;
  box-sizing: border-box;
  font-weight: 600;

  position: absolute;
  top: 55vh;
  z-index: 100;

  transition-property: scale, background;
  transition-duration: 100ms;

  :hover {
    background: #5cd3a8;
    scale: 1.1;
  }
`;

export const Text = styled.h1`
  display: block;
  font-weight: 600;
  color: #e3bd4f;
  text-shadow: 1px 1px 2px #373737;
  text-transform: uppercase;
`;
