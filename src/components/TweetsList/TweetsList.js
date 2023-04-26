import TweetCard from 'components/TweetCard/TweetCard';
import { List } from './TweetsList.styled';
import { useEffect, useState } from 'react';

const TweetsList = ({
  tweets,
  filter = 'all',
  followId,
  setFollowed,
  setIsMore,
  lastPage,
}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let newList = [];
    if (!lastPage) {
      setIsMore(true);
    }

    switch (filter) {
      case 'all':
        setList(tweets);
        break;
      case 'following':
        newList = tweets.filter(tweet => followId.includes(tweet.id));
        setList(newList);
        setIsMore(false);
        break;
      case 'follow':
        newList = tweets.filter(tweet => !followId.includes(tweet.id));
        setList(newList);
        break;
      default:
        return;
    }
  }, [filter, followId, tweets, setIsMore, lastPage]);

  return (
    <>
      <List>
        {list.map(tweet => {
          const followed = followId.includes(tweet.id) ? true : false;

          return (
            <TweetCard
              key={tweet.id}
              tweet={tweet}
              followed={followed}
              setFollowed={setFollowed}
            />
          );
        })}
      </List>
    </>
  );
};

export default TweetsList;
