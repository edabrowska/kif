import styled from '@emotion/styled'

export const ButtonRoot = styled.button`
  border-radius: ${({ theme }) => theme.commons.borderRadius.button};
  background-color: ${({ theme }) => theme.colors.buttonActive.background};
  color: ${({ theme }) => theme.colors.buttonActive.text};
  padding: 16px 36px;
  outline: none;
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.6rem;

  &:disabled {
    color: ${({ theme }) => theme.colors.buttonDisabled.text};
    background: ${({ theme }) => theme.colors.buttonDisabled.background};
    cursor: default;
  }
`

export const CloseButtonRoot = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: ${({ theme }) => theme.commons.borderRadius.input};
  border: ${({ theme }) => theme.commons.borders.input};
  background: transparent;
  color: ${({ theme }) => theme.colors.text.title};
  padding: 10.5px 16.6px;
  font-size: 2.2rem;
  outline: none;
  cursor: pointer;
`