import { css } from '@emotion/core'
import normalize from 'emotion-normalize'

import { text } from './theme/colors'

const base = css`
  * {
    border: none;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%; //== 10px (so that 1rem == 10px)
  }

  body {
    color: ${text.primary};
    font-size: 1.6rem;
    height: 100vh;
  }

  p, ul, li {
    margin: 0;
  }
`

export default css`
  ${normalize}
  ${base}
`
