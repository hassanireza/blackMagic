import { useRef, useState } from 'react'
import type { MouseEvent, TouchEvent } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Mosaic from './components/Mosaic'
import Modal from './components/Modal'
import ModalInner from './components/ModalInner'
import { PointerTracker } from './core/PointerTracker'
import { GlobalStyle } from './styles'

const App = () => {
  const trackerRef = useRef(new PointerTracker(3))
  const [distance, setDistance] = useState(1)
  const [showModal, setShowModal] = useState(false)

  const viewport = () => ({ width: window.innerWidth, height: window.innerHeight })

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    setDistance(trackerRef.current.fromMouseEvent(event, viewport()))
  }

  const handleTouchMove = (event: TouchEvent<HTMLElement>) => {
    const touch = event.touches[0]
    if (!touch) return
    setDistance(trackerRef.current.fromTouchEvent(touch, viewport()))
  }

  const toggleModal = () => {
    setShowModal((current) => !current)
  }

  return (
    <>
      <GlobalStyle />
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <ModalInner />
        </Modal>
      )}
      <Header />
      <Footer />
      <Mosaic
        distance={distance}
        glow={1 - distance}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onSignUpClick={toggleModal}
      />
    </>
  )
}

export default App
