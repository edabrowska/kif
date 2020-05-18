import styled from '@emotion/styled'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colors.background.overlay};
`

export const ModalRoot = styled.div`
  position: relative;
  padding: 80px 20px 70px;
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.commons.borderRadius.modal};
  text-align: center;

  @media (min-width: 992px) {
    width: 100%;
    max-width: 800px;
  }
`