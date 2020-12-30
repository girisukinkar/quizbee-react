import React from 'react';
const Result = ({score,playAgain}) => (
  <div className="score-board">
      <div className="score">You scored { score } / 5 corrent answers!</div>
        <button className="playBtn" onClick={playAgain}>Play Again!</button>
  </div>  
);

export default Result;