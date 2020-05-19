import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'

import CodeInput from './CodeInput'

import theme from '../../styles/theme/theme'

expect.addSnapshotSerializer(serializer)

describe('renders CodeInput', () => {
  it('Snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <CodeInput handleChange={() => { }} handleConfirm={() => { }} />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
