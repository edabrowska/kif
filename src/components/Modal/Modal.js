import React from 'react'

import {
  ModalOverlay,
  ModalRoot
} from './Modal.shards'

import { CloseButton, Button } from '../Button/Button'

const Modal = ({ modalActive, setModalActive }) => {
  const closeModal = () => setModalActive(false)
  const handleConfirm = () => console.log('confirmed')

  return (
    <ModalOverlay>
      <ModalRoot>
        <CloseButton handleClick={closeModal} />
        <h4>Podaj kod PIN</h4>
        <p>Na podany numer telefonu wysłaliśmy SMS z kodem PIN</p>
        <Button
          handleClick={handleConfirm}
          text='Potwierdź'
          active={false}
        />
        <p>Nie otrzymałeś kodu? <span>Wyślij ponownie</span></p>
      </ModalRoot>
    </ModalOverlay>
  )
}

export default Modal