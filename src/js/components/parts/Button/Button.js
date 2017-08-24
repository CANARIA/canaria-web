import React from 'react'
import PropTypes from 'prop-types'
import style from './Button.style'

const Button = ({
  children,
  onClick,
  to,
  href,
  replace = false,
  disabled = false,
  theme = '',
  size = '',
  hover = 'opacity'
}) => {
  const { Button, Link, Anchor } = style({ theme, size, hover })

  if (onClick) {
    return (
      <Button onClick={onClick} disabled={disabled}>
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
    <Button disabled={disabled}>
      {children}
    </Button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  href: PropTypes.string,
  replace: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  size: PropTypes.string,
  hover: PropTypes.string
}

export default Button
