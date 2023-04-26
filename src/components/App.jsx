import { Route, Routes } from 'react-router-dom';
import Homepage from 'pages/Homepage/Homepage';
import TweetsPage from 'pages/TweetsPage/TweetsPage';
import { Footer, FooterLink, Header, Main, Signature, Title } from './App.styled';

export const App = () => {
  return (
    <>
      <Header>
        <Title>Wellcome to Tweet App!</Title>
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tweets" element={<TweetsPage />} />
        </Routes>
      </Main>
      <Footer>
        <Signature>
          &#169; by <FooterLink href="https://github.com/Pibodee">Pibodee</FooterLink> , 2023
        </Signature>
      </Footer>
    </>
  );
};
