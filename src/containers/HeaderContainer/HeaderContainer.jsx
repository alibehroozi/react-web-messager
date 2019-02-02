import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { goToLogin } from '../../actions/goToLogin';
import { Container } from './HeaderContainer.styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
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
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Select Your Contact...
                </Typography>
                </Toolbar>
            </AppBar>
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
