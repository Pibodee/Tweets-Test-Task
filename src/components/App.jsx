import { Route, Routes } from 'react-router-dom';
import { Footer, FooterLink, Header, HomeLink, Main, Signature, Title } from './App.styled';
import { Suspense, lazy } from 'react';
import { Loader } from './Loader/Loader';
import { FcApproval } from 'react-icons/fc';
import { IconContext } from 'react-icons';

const Home = lazy(() => import('../pages/Homepage/Homepage'))
const TweetsPage = lazy(()=> import('../pages/TweetsPage/TweetsPage'))

export const App = () => {
  return (
    <>
      <Header>
        <IconContext.Provider value={{ size: '2em' }}>
          <HomeLink to="/">
            <FcApproval />
          </HomeLink>
        </IconContext.Provider>
        <Title>Wellcome to Tweet App!</Title>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tweets" element={<TweetsPage />} />
          </Routes>
        </Suspense>
      </Main>
      <Footer>
        <Signature>
          &#169; by{' '}
          <FooterLink href="https://github.com/Pibodee">Pibodee</FooterLink> ,
          2023
        </Signature>
      </Footer>
    </>
  );
};
