import React from 'react'
import PinInput from 'react-pin-input'

import { InputWrapper, Error } from './CodeInput.shards'
import { borders, borderRadius } from '../../styles/theme/commons'
import { Button } from '../Button/Button'

const CodeInput = ({
  handleChange,
  handleConfirm,
  error = false,
  active = false
}) => {
  return <InputWrapper>
    <PinInput
      length={4}
      initialValue=''
      type='numeric'
      onChange={handleChange}
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom: '40px'
      }}
      inputStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: error ? borders.error : borders.input,
        borderRadius: borderRadius.input,
        padding: '22px 18px',
        width: '50px',
        height: '68px',
      }}
    />
    {error && <Error>Kod PIN musi zawierać 4 cyfry</Error>}
    <Button
      handleClick={handleConfirm}
      text='Potwierdź'
      active={active}
    />
  </InputWrapper>
}

export default CodeInput