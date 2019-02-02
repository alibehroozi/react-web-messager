import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { goToLogin } from '../../actions/goToLogin';
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

    handleOnClick = () => {
        this.props.dispatch(goToLogin());
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return (
            <div className="HeaderContainerWrapper" onClick={this.handleOnClick}>
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

export default connect(
    mapStateToProps
)(HeaderContainer);
