import { Loader } from 'components/Loader/Loader';
import TweetsList from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchTweets } from 'services/fetch';

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchTweets()
      .then(data => setTweets(data), setIsLoading(true))
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, []);

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => {
            navigate(location.state?.from ?? '/');
          }}
        >
          Back
        </button>
        {isLoading && <Loader/>}
        {tweets && <TweetsList tweets={tweets} />}
      </div>
    </>
  );
};

export default TweetsPage;
