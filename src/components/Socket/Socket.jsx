import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';


export const SocketContext = React.createContext({});

class Socket extends PureComponent {
  constructor(props) {
    super(props);
    this.socket = io(`${this.props.protocol}://${this.props.host}:${this.props.port}`);
    this.socket.on('connect', () => {
      this.setState({ connected: true });
    });
  }

  state = { connected: false };

  emitEvent = (eventName, eventMessage) => {
    this.socket.emit(eventName, eventMessage);
  }

  listenForEvent = (eventName, callback) => {
    this.socket.on(eventName, args => callback(...args));
  }

  compactContext = () => {
    return {
      emitEvent: this.emitEvent,
      listenForEvent: this.listenForEvent
    }
  }

  render() {
    const child = this.props.children;
    return (
      this.state.connected ?
        (<SocketContext.Provider value={this.compactContext()}>{child}</SocketContext.Provider>)
        :
        'connecting...'

    );
  }
}

Socket.propTypes = {
  port: PropTypes.number,
  host: PropTypes.string,
  protocol: PropTypes.string,
};

Socket.defaultProps = {
  host: 'localhost',
  protocol: 'http',
};

export default Socket;
