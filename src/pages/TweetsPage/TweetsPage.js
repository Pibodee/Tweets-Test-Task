import { Loader } from 'components/Loader/Loader';
import TweetsList from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchTweets } from 'services/fetch';
import { PageBtn, Container} from './TweetsPage.styled';

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
      <Container>
        <PageBtn
          type="button"
          onClick={() => {
            navigate(location.state?.from ?? '/');
          }}
        >
          &#x3c; Back
        </PageBtn>
        {tweets && <TweetsList tweets={tweets} />}
        {isMore && <PageBtn onClick={loadMore}>Load More</PageBtn>}
        {isLoading && <Loader />}
      </Container>
    </>
  );
};

export default TweetsPage;
