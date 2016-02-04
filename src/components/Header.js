import React, { PropTypes } from 'react';

const Header = ({heading}) => {
  return (
    <div>
      <h1> {heading} </h1>
    </div>
  );
};

Header.propTypes = {
  heading: React.PropTypes.string,
};
Header.defaultProps = {
  heading: "Hello World"
};

export default Header;
