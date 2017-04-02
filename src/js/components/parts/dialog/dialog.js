import React, { Component, PropTypes } from 'react';
import { findDOMNode, unmountComponentAtNode } from 'react-dom';
import Box from '../box/box';
import Column from '../column/column';
import Button from '../button/button';

export default class Dialog extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    accept: PropTypes.string.isRequired,
    cancel: PropTypes.string,
    resolve: PropTypes.func.isRequired
  }

  constructor(...args) {
    super(...args);

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
      <div className="c-dialog">
        <Box modifier="theme-white size-m" styles={{ width: '450px' }}>
          <div className="c-dialog-body">
            <p className="c-dialog-text">{message}</p>
          </div>

          <div className="c-dialog-bottom">
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
