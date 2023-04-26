import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  FollowBtn,
  ImageThumb,
  Pic,
  TweetsText,
  Wrapper,
} from './TweetCard.styled';
import { fetchFollow } from 'services/fetch';
import * as alterAvatar from '../../images/Avatar_alter.jpg';

const TweetCard = ({ tweet, followed, setFollowed }) => {
  const [isActive, setIsActive] = useState(JSON.parse(followed));
  const [user, setUser] = useState(tweet);

  const followClick = () => {
    if (!isActive) {
      setIsActive(true);
      setFollowed(prev => [...prev, tweet]);
      setUser(prev => ({ ...prev, followers: prev.followers + 1 }));
    } else {
      setIsActive(false);
      setFollowed(prev => {
        const newFollowed = prev.filter(item => item.user !== tweet.user);
        return newFollowed;
      });
      setUser(prev => ({ ...prev, followers: prev.followers - 1 }));
    }
  };

  useEffect(() => {
    if (user === tweet) return;
    fetchFollow(user).catch(error => console.log(error));
  }, [tweet, user]);

  return (
    <Card>
      <ImageThumb>
        <Pic src={tweet.avatar ?? alterAvatar.default} alt="avatar" />
      </ImageThumb>
      <Wrapper>
        <TweetsText>
          {user.tweets.toLocaleString('en', { useGrouping: true })} tweets
        </TweetsText>
        <TweetsText>
          {user.followers.toLocaleString('en', { useGrouping: true })} followers
        </TweetsText>
        <FollowBtn onClick={followClick} isActive={isActive}>
          {isActive ? ' Following' : 'Follow'}
        </FollowBtn>
      </Wrapper>
    </Card>
  );
};

export default TweetCard;

TweetCard.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
  followed: PropTypes.bool.isRequired,
  setFollowed: PropTypes.func.isRequired,
};
