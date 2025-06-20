import React from 'react';
import Stars from './Stars';

const App: React.FC = () => {
  return (
    <div>
      <Stars count={1} />
      { <Stars count={3} /> }
      { <Stars count={5} /> }
      { <Stars count={0} /> }
      { <Stars count={6} /> }
    </div>
  );
};

export default App;