import TweetCard from 'components/TweetCard/TweetCard';

const TweetsList = ({ tweets }) => {
    
  return (
    <>
      <ul>
        {tweets.map(tweet => {
          return (
              <TweetCard key={tweet.id} tweet={tweet} />
          );
        })}
      </ul>
    </>
  );
};


export default TweetsList
