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
    if (this.props.expanded) {
      this.props.getInfo(this.props.numericPath, this.props.pt).then((data) => {
        this.setState({ folders: data.folders, files: data.files });
      });
    }
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.numericPath !== prevProps.numericPath && this.props.pt !== prevProps.pt && this.props.expanded) {
      this.props.getInfo(this.props.numericPath, this.props.pt).then((data) => {
        this.setState({ folders: data.folders, files: data.files });
      });
    }
  }


  handleOnFolderClick = (paths, pt) => {
    this.props.onFolderClick(paths, pt);
  }

  renderFolder = () => {
    return this.state.folders.map((name, i) => (
      <Folder key={i} name={name} expanded={this.props.childExpanded} childExpanded={this.props.childExpanded} pt={this.props.pt + ',' + name} numericPath={this.props.numericPath.concat([i])} onFolderClick={this.props.onFolderClick} getInfo={this.props.getInfo} />
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
      </> : (<>{"\t"}<div onClick={this.props.onFolderClick.bind(null, this.props.numericPath, this.props.pt)}>{this.props.name} </div></>)
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
