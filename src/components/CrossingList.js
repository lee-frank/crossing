import React, { PropTypes } from 'react';
import Crossing from './Crossing';
import Rating from './Rating';

const CrossingList = ({crossing_array}) => {
  console.log({crossing_array})
  return (
    <div>
      {
        crossing_array.map (function(element, index){
        return (
          <div key={index}>
            <Crossing crossingName={element.crossingName} waitTime={element.waitTime} />
            <Rating />
          </div>
        ) 
      })
      }
    </div>
  );
};

CrossingList.propTypes = {
  crossing_array: React.PropTypes.array,
};
// CrossingList.defaultProps = {
//   heading: "Hello World"
// };

export default CrossingList;
