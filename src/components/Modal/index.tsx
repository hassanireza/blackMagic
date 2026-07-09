import type { ReactNode } from 'react'
import { Modal, BG, Close } from './styles'

interface ModalProps {
  toggleModal: () => void
  children: ReactNode
}

const ModalComponent = ({ toggleModal, children }: ModalProps) => (
  <>
    <Modal>
      <Close onClick={toggleModal} aria-label="Close" />
      {children}
    </Modal>
    <BG onClick={toggleModal} />
  </>
)

export default ModalComponent
