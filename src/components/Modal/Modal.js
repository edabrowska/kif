import React, { useState } from 'react'

import {
  ModalOverlay,
  ModalRoot,
  ImgWrapper,
  Title,
  Description,
  Note,
  Marked
} from './Modal.shards'

import { CloseButton } from '../Button/Button'
import CodeInput from '../CodeInput/CodeInput'
import lock from '../../images/lock.png'

const Modal = ({ setModalActive }) => {
  const [active, setActive] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const [error, setError] = useState(false)

  const closeModal = () => setModalActive(false)

  const handleChange = value => {
    setActive(true)
    setInputVal(value)
    setError(false)
  }

  const handleConfirm = () => {
    if (inputVal.length === 4) {
      alert('Twój kod: 1234')
    } else {
      setActive(false)
      setError(true)
    }
  }

  return (
    <ModalOverlay>
      <ModalRoot>
        <ImgWrapper>
          <img src={lock} alt='lock' />
        </ImgWrapper>
        <CloseButton handleClick={closeModal} />
        <Title>Podaj kod PIN</Title>
        <Description>Na podany numer telefonu wysłaliśmy SMS z kodem PIN</Description>
        <CodeInput
          handleChange={handleChange}
          error={error}
          handleConfirm={handleConfirm}
          active={active && inputVal}
        />
        <Note>
          Nie otrzymałeś kodu?
          <Marked onClick={handleConfirm}>Wyślij ponownie</Marked>
        </Note>
      </ModalRoot>
    </ModalOverlay>
  )
}

export default Modal