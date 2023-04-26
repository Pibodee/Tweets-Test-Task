import { Loader } from 'components/Loader/Loader';
import TweetsList from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchTweets } from 'services/fetch';
import { PageBtn, Container } from './TweetsPage.styled';
import Dropdown from 'components/Dropdown/Dropdown';

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false)
  const [isMore, setIsMore] = useState(false);
  const [followed, setFollowed] = useState(
    JSON.parse(localStorage.getItem('followed')) || []
  );
  const [filter, setFilter] = useState('all');

  const navigate = useNavigate();
  const location = useLocation();

  const followId = (tweets, followed) => {
    const filterId = [];
    tweets.forEach(tweet => {
      followed.filter(user => {
        if (user.id === tweet.id) {
          filterId.push(user.id);
        }
        return user.id === tweet.id;
      });
    });
    return filterId;
  };

  const followedId = followId(tweets, followed);

  useEffect(() => {
    localStorage.setItem('followed', JSON.stringify(followed));
  }, [followed]);

  useEffect(() => {
    setIsLoading(true);
    fetchTweets(page)
      .then(data => {
        if (data.length < 3) {
          setLastPage(true)
          setIsMore(false);
          return;
        }
        if (!data) {
          return;
        }

        if (page === 1) {
          setTweets([...data]);
          setIsMore(true);
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
      <Container>
        <PageBtn
          type="button"
          onClick={() => {
            navigate(location.state?.from ?? '/');
          }}
        >
          &#x3c; Back
        </PageBtn>
        <Dropdown setFilter={setFilter} />
        {tweets && (
          <TweetsList
            tweets={tweets}
            filter={filter}
            followId={followedId}
            setFollowed={setFollowed}
            lastPage={lastPage}
            setIsMore={setIsMore}
          />
        )}
        {isMore && <PageBtn onClick={loadMore}>Load More</PageBtn>}
        {isLoading && <Loader />}
      </Container>
    </>
  );
};

export default TweetsPage;
