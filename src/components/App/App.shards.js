import styled from '@emotion/styled'

export const AppRoot = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background.primary};
`