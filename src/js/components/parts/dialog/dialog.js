import React from 'react';
import { findDOMNode, unmountComponentAtNode } from 'react-dom';
import Box from '../box/box';
import Column from '../column/column';
import Button from '../button/button';

export default class Dialog extends React.Component {

  constructor(props) {
    super(props);

    this.handleAccept = this.handleAccept.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleFinalize() {
    const wrapper = findDOMNode(this).parentNode;
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
        <Box modifier="theme-white size-m" styles={{ width: '450px' }}>
          <div className="a-dialog-body">
            <p className="a-dialog-text">{message}</p>
          </div>

          <div className="a-dialog-bottom">
            <Column
              iteratorKey="dialog"
              list={
                cancel ? [
                  <Button onClick={this.handleCancel} modifier="theme-cancel size-s">{cancel}</Button>,
                  <Button onClick={this.handleAccept} modifier="theme-primary size-s">{accept}</Button>
                ] : [
                  <Button onClick={this.handleAccept} modifier="theme-primary size-s">{accept}</Button>
                ]
              }
              modifier="size-s"
            />
          </div>
        </Box>
      </div>
    );
  }
}
