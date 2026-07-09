import { useRef, useState } from 'react'
import { Container, P, H3, Socials, H4, SuccessContainer } from './styles'
import Form from '../Form'
import { SignupFormController, type SignupPayload } from '../../core/SignupFormController'
import SuccessIcon from './icon_success.svg?react'
import Instagram from './icon_instagram.svg?react'
import Facebook from './icon_facebook.svg?react'
import Twitter from './icon_twitter.svg?react'

const SignupStep = ({ onSubmit }: { onSubmit: (payload: SignupPayload) => void }) => (
  <Container>
    <H3>Sign Up</H3>
    <P>Join the circle to be notified when pre-release tickets for our first ever world tour go on sale.</P>
    <Form onSubmit={onSubmit} />
  </Container>
)

const SuccessStep = () => (
  <SuccessContainer>
    <SuccessIcon />
    <H4>You are in. The circle welcomes you.</H4>
    <p>Follow along to keep up to date with everything Black Magic:</p>
    <Socials>
      <Instagram />
      <Twitter />
      <Facebook />
    </Socials>
  </SuccessContainer>
)

const ModalInner = () => {
  const controllerRef = useRef(new SignupFormController())
  const [stage, setStage] = useState(controllerRef.current.getStage())

  const handleSubmit = (payload: SignupPayload) => {
    const nextStage = controllerRef.current.submit(payload)
    setStage(nextStage)
  }

  return stage === 'submitted' ? <SuccessStep /> : <SignupStep onSubmit={handleSubmit} />
}

export default ModalInner
