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
  padding: 76px 20px 70px;
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.commons.borderRadius.modal};
  text-align: center;
  width: 90%;

  @media (min-width: 992px) {
    width: 100%;
    max-width: 800px;
    padding-top: 100px;
  }
`

export const ImgWrapper = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background.accent};

  @media (min-width: 992px) {
    width: 100px;
    height: 100px;
  }
`

export const Title = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.text.title};
  margin: 12px 0;

  @media (min-width: 992px) {
    font-size: 2.4rem;
    line-height: 2.4rem;
    margin: 20px 0;
  }
`

export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.2rem;

  @media (min-width: 992px) {
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
`

export const Note = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.6rem;

  @media (min-width: 992px) {
    font-size: 1.6rem;
  }
`

export const Marked = styled.span`
  color: ${({ theme }) => theme.colors.text.error};
  cursor: pointer;
`