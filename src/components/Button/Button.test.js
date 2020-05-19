import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'

import { Button, CloseButton } from './Button'

import theme from '../../styles/theme/theme'

expect.addSnapshotSerializer(serializer)

describe('renders buttons', () => {
  it('Snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Button text='button' handleClick={() => { }} />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Snapshot2', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <CloseButton handleClick={() => { }} />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
