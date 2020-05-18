import React, { useState } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import globalStyles from '../../styles/global'
import theme from '../../styles/theme/theme'

import { AppRoot } from './App.shards'

import { Button } from '../Button/Button'
import Modal from '../Modal/Modal'

const App = () => {
  const [modalActive, setModalActive] = useState(false)

  const handleModal = () => setModalActive(true)

  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <AppRoot>
          <Button
            handleClick={handleModal}
            text='open modal'
          />
          {modalActive && <Modal active={modalActive} setModalActive={setModalActive} />}
        </AppRoot>
      </ThemeProvider>
    </>
  )
}

export default App
