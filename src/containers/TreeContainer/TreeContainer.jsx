import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { goToLogin } from '../../actions/goToLogin';
import { Container } from './TreeContainer.styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { SocketContext } from '../../components/Socket';
class TreeContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }
    static contextType = SocketContext;

    handleOnClick = () => {
        this.props.dispatch(goToLogin());
    }

    render() {
        console.log(this.context);

        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return (
            <AppBar position="static" onClick={this.handleOnClick}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Select Your Contact...
                </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

TreeContainer.propTypes = {
};

TreeContainer.defaultProps = {
};

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps
)(TreeContainer);
