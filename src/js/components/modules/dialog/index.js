import React from 'react';
import { render } from 'react-dom';
import Dialog from '../../parts/organisms/dialog/dialog';

export default (message, { accept, cancel }) => new Promise((resolve) => {
  render(
    <Dialog
      message={message}
      accept={accept}
      cancel={cancel}
      resolve={resolve}
    />,
    document.body.appendChild(document.createElement('div'))
  );
});
