import React from 'react'
import PropTypes from 'prop-types'

const Html = ({ title, description, children, initialState }) =>
  <html>
    <head>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple_icon.png" />
      <link rel="stylesheet" href="/bundle.css" />
      <title>
        {title}
      </title>
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
      <script
        id="initial-state"
        type="text/plain"
        data-json={JSON.stringify(initialState)}
      />
      <script src="/bundle.js" />
    </body>
  </html>

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  initialState: PropTypes.object.isRequired
}

export default Html
