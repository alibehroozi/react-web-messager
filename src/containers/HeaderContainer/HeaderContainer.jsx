import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './HeaderContainer.styles';

class HeaderContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('HeaderContainer will mount');
  }

  componentDidMount = () => {
    console.log('HeaderContainer mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('HeaderContainer will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('HeaderContainer will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('HeaderContainer did update');
  }

  componentWillUnmount = () => {
    console.log('HeaderContainer will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="HeaderContainerWrapper">
        Test content
      </div>
    );
  }
}

HeaderContainer.propTypes = {
  // bla: PropTypes.string,
};

HeaderContainer.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
