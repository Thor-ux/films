import React from 'react';
import Star from './Star';

const Stars = ({ count = 0 }) => {

  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }

  const stars = Array.from({ length: count }, (_, index) => (
    <Star key={index} />
  ));

  return (
    <ul className="card-body-stars u-clearfix">
      {stars}
    </ul>
  );
};

export default Stars;