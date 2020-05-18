import React from 'react'

import { ButtonRoot, CloseButtonRoot } from './Button.shards'

const Button = ({ active = true, text, handleClick }) => {
  return (
    <ButtonRoot
      type='button'
      onClick={handleClick}
      disabled={!active}
    >
      {text}
    </ButtonRoot>
  )
}

const CloseButton = ({ handleClick }) => (
  <CloseButtonRoot
    type='button'
    onClick={handleClick}
  >
    &times;
  </CloseButtonRoot>
)

export { Button, CloseButton }