import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Folder.styles';
import File from '../../components/File';





class Folder extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      files: []
    };

  }


  componentDidMount = () => {
    this.props.getInfo(this.props.numericPath).then((data) => {
      this.setState({ folders: data.folders, files: data.files });
    });
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.numericPath !== prevProps.numericPath) {
      this.props.getInfo(this.props.numericPath).then((data) => {
        this.setState({ folders: data.folders, files: data.files });
      });
    }
  }


  handleOnFolderClick = (paths) => {
    this.props.onFolderClick(paths);
  }

  renderFolder = () => {
    return this.state.folders.map((name, i) => (
      <Folder key={i} name={name} expanded={this.props.childExpanded} childExpanded={this.props.childExpanded} numericPath={this.props.numericPath.concat([i])} onFolderClick={this.props.onFolderClick} getInfo={this.props.getInfo} />
    ));
  }

  renderFiles = (files) => {
    return this.state.files.map((name, i) => (
      <File key={i} name={name} />
    ));
  }


  render() {
    return (
      this.props.expanded ? <>
        Folders:
        {this.renderFolder()}
        <br /><br />
        Files:
        {this.renderFiles()}
      </> : (<>{"\t"}<div onClick={this.props.onFolderClick.bind(null, this.props.numericPath)}>{this.props.name} </div></>)
    )
  }
}

Folder.propTypes = {
  // bla: PropTypes.string,
};

Folder.defaultProps = {
  // bla: 'test',
};

export default Folder;
