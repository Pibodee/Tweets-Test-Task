import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
margin: 0 auto;
padding 15px;
height: 30px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
min-width: 100vw;
position: sticky;
top: 0;
z-index: 50;
display: block;
position: relative;`;

export const HomeLink = styled(NavLink)`
display: block;
padding: 5px;
position: absolute;
left: 15px;
top: 5px;
`

export const Title = styled.h2`
  padding: 0;
  margin: 0;
  text-align: center;
  color: #e3bd4f;
  text-shadow: 1px 1px 2px #373737;
`;

export const Main = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px 0;
  background: #8d81dc;
  min-width: 100vw;
`;

export const Footer = styled.footer`
margin: 0 auto;
padding 15px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
min-width: 100vw;
z-index: 10;
`;

export const Signature = styled.p`
  text-align: center;
  color: #e3bd4f;
  text-shadow: 1px 1px 2px #373737;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: #21b367;
`;

// #8D81DC
