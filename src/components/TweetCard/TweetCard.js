import { Card, FollowBtn, Pic, TweetsText, Wrapper} from './TweetCard.styled';

const TweetCard = ({ tweet }) => {
  return (
    <Card>
      <Pic src={`${tweet.avatar}`} alt="avatar" />
      <Wrapper>
        <TweetsText>{tweet.tweets} tweets</TweetsText>
        <TweetsText>{tweet.followers} followers</TweetsText>
        <FollowBtn> Follow </FollowBtn>
      </Wrapper>
    </Card>
  );
};

export default TweetCard;
