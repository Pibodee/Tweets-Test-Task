import { useEffect, useState } from 'react';
import { Card, FollowBtn, ImageThumb, Pic, TweetsText, Wrapper } from './TweetCard.styled';
import { fetchFollow } from 'services/fetch';

const TweetCard = ({ tweet }) => {
  const [isActive, setIsActive] = useState(JSON.parse(localStorage.getItem(`${tweet.id}`)) || false);
  const [user, setUser] = useState(tweet);

  const followClick = () => {
    if (!isActive) {
      setIsActive(true);
      setUser(prev => ({ ...prev, followers: prev.followers + 1 }));
      localStorage.setItem(`${user.id}`, JSON.stringify(!isActive))
    } else {
      setIsActive(false);
      localStorage.setItem(`${user.id}`, JSON.stringify(!isActive))
      setUser(prev => ({ ...prev, followers: prev.followers - 1 }));
    }
  };

  useEffect(() => {
    fetchFollow(user).catch(error => console.log(error));
    
  }, [tweet, user]);

  return (
    <Card>
      <ImageThumb>
        <Pic src={`${tweet.avatar}`} alt="avatar" />
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
