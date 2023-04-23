import { NavLink, useLocation } from "react-router-dom";

const Homepage = () => {
  const location = useLocation();
  return (
    <>
      <div>
        <NavLink to="/tweets" state={{from: location}}>Tweets</NavLink>
      </div>
    </>
  );
};


export default Homepage