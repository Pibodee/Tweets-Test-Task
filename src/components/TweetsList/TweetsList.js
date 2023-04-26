import TweetCard from 'components/TweetCard/TweetCard';
import { List } from './TweetsList.styled';

const TweetsList = ({ tweets }) => {
    
  return (
    <>
      <List>
        {tweets.map(tweet => {
          return (
              <TweetCard key={tweet.id} tweet={tweet} />
          );
        })}
      </List>
    </>
  );
};


export default TweetsList
