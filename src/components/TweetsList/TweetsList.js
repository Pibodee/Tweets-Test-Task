import TweetCard from 'components/TweetCard/TweetCard';

const TweetsList = ({ tweets }) => {
    
  return (
    <>
      <ul>
        {tweets.map(tweet => {
          return (
            <li key={tweet.id}>
              <TweetCard tweet={tweet} />
            </li>
          );
        })}
      </ul>
    </>
  );
};


export default TweetsList
