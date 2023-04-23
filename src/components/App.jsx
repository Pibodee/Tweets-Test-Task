import { Route, Routes } from 'react-router-dom';
import Homepage from 'pages/Homepage/Homepage';
import TweetsPage from 'pages/TweetsPage/TweetsPage';

export const App = () => {
  return (
    <>
      <header>
        <h2>Tweet App</h2>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          {/* <Route path="/tweets/:tweetId" element={<TweetDetails />} /> */}
        </Routes>
      </main>
      <footer>
        <p>
          by <a href="https://github.com/Pibodee">Pibodee</a> , 2023
        </p>
      </footer>
    </>
  );
};
