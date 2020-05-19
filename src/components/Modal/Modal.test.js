import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'

import Modal from './Modal'

import theme from '../../styles/theme/theme'

expect.addSnapshotSerializer(serializer)

describe('renders Modal', () => {
  it('Snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Modal setModalActive={() => { }} />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
