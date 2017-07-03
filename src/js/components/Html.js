/* @flow */

import React from 'react'

class Html extends React.Component {
  render() {
    const { title, description, children } = this.props

    return (
      <html>
        <head>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple_icon.png" />
          <title>{title}</title>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script src="/bundle.js"></script>
        </body>
      </html>
    )
  }
}

export default Html
