import { useLocation } from 'react-router-dom';
import { StyledNav, Text } from './Homepage.styled';
import HomeBackground from 'components/HomeAnimation/HomeAnimation';

const Homepage = () => {
  const location = useLocation();
  return (
    <>
      <Text>Click button below to see tweets!</Text>
      <StyledNav to="/tweets" state={{ from: location }}>
        Tweets
      </StyledNav>
      <HomeBackground />
    </>
  );
};

export default Homepage;
