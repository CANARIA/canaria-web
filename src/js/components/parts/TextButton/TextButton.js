import React from 'react'
import PropTypes from 'prop-types'
import style from './TextButton.style'

const TextButton = ({
  children,
  onClick,
  to,
  href,
  replace = false,
  theme = '',
  size = ''
}) => {
  const { Button, Link, Anchor } = style({ theme, size })

  if (onClick) {
    return (
      <Button onClick={onClick}>
        {children}
      </Button>
    )
  }

  if (to) {
    return (
      <Link to={to} replace={replace}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <Anchor href={href}>
        {children}
      </Anchor>
    )
  }

  return (
    <Button>
      {children}
    </Button>
  )
}

TextButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  href: PropTypes.string,
  replace: PropTypes.bool,
  theme: PropTypes.string,
  size: PropTypes.string
}

export default TextButton
