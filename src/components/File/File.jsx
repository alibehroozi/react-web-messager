import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './File.styles';

const File = (props) => (
  <div className="FileWrapper">
    {"\t"}{props.name}
  </div>
);

File.propTypes = {
  // bla: PropTypes.string,
};

File.defaultProps = {
  // bla: 'test',
};

export default File;
