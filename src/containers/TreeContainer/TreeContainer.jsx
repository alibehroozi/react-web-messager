import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { goToLogin } from '../../actions/goToLogin';
import { Container } from './TreeContainer.styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { SocketContext } from '../../components/Socket';
import Folder from '../../components/Folder';

class TreeContainer extends PureComponent {

    state = { paths: [] };
    static contextType = SocketContext;


    handleOnClick = (paths) => {
        return new Promise((resolve) => {
            this.context.emitEvent('folderInfo', paths, (data) => {
                resolve(data);
            });
        });
    }

    handleFolderClick = (paths) => {
        this.setState({ paths });
    }

    render() {
        return (<>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Tree...
                </Typography>
                </Toolbar>
            </AppBar>
            <Folder name="root" expanded childExpanded numericPath={this.state.paths} getInfo={this.handleOnClick} onFolderClick={this.handleFolderClick} />
        </>
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
