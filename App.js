import React from 'react';
import Stars from './Stars';

const App = () => {
  return (
    <div>
      <h1>Movie Rating</h1>
      <Stars count={3} />
    </div>
  );
};

export default App;