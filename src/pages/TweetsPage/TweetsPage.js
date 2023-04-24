import { Loader } from 'components/Loader/Loader';
import TweetsList from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchTweets } from 'services/fetch';

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    fetchTweets(page)
      .then(data => {
        if (data.length < 3) {
          setIsMore(false);
          return;
        }
        if (!data) {
          return;
        }
        setIsMore(true);
        if (page === 1) {
          setTweets([...data]);
        }
        if (page > 1) {
          setTweets(prev => [...prev, ...data]);
        }
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, [page]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

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
        {isLoading && <Loader />}
        {tweets && <TweetsList tweets={tweets} />}
        {isMore && <button onClick={loadMore}>Load More</button>}
      </div>
    </>
  );
};

export default TweetsPage;
