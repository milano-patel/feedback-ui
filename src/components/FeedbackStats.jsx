import React from 'react';

function FeedbackStats({ feedback }) {
  let averageRating =
    feedback.reduce((prev, cur) => {
      return prev + cur.rating;
    }, 0) / feedback.length;

  averageRating = averageRating.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Ratings: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
}

export default FeedbackStats;
