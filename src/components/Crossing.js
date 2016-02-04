import React from 'react';

const Crossing = ({crossingName, waitTime}) => {
  return (
    <div className="crossing">
      <div className="crossingName">{crossingName}</div>
      <div className="waitTime">{waitTime}</div>
    </div>
  );  
};

export default Crossing;
