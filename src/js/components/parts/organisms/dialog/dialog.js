import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

export default class Dialog extends React.Component {

  handleFinalize() {
    const wrapper = this.node.parentNode;
    unmountComponentAtNode(wrapper);
    setTimeout(() => wrapper.parentNode.removeChild(wrapper), 0);
  }

  handleAccept() {
    this.props.resolve(true);
    this.handleFinalize();
  }

  handleCancel() {
    this.props.resolve(false);
    this.handleFinalize();
  }

  render() {
    const { message, accept, cancel } = this.props;

    return (
      <div className="a-dialog">
        <div className="a-dialog-inner">
          <p className="a-dialog-text">{message}</p>

          <div className="a-dialog-buttons">
            <button onClick={this.handleAccept}>{accept}</button>
            {cancel && <button onClick={this.handleAccept}>{cancel}</button>}
          </div>
        </div>
      </div>
    );
  }
}
