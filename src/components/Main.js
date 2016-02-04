import React, { PropTypes } from 'react';
import Header from './Header';
import CrossingList from './CrossingList';

const Main = () => {
  const crossing_array = [
    {crossingName: "Peace Bridge", waitTime:"10"},
    {crossingName: "Niagara Falls", waitTime: "15"},
    {crossingName: "Queenston", waitTime:"40"}
    ]
  return (
    <div>
      <Header heading="This is a new header" />
      <CrossingList crossing_array={crossing_array} />
    </div>
  );
};

Main.propTypes = {
  heading: React.PropTypes.string,
};
Main.defaultProps = {
  heading: "Hello World"
};

export default Main;