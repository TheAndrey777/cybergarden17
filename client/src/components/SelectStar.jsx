import React from 'react';
import StarRating from './StarRating';

export default function SelectStar() {
  return (
    <div>
      <StarRating value={0} size={16} interactive={true} />
    </div>
  );
}
