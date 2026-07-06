import React, { useState } from "react";
import { Container, P, H3, Socials, H4, SuccessContainer } from "./styles";
import Form from "../Form";
import { ReactComponent as SuccessIcon } from './icon_success.svg'
import { ReactComponent as Instagram } from './icon_instagram.svg'
import { ReactComponent as Facebook } from './icon_facebook.svg'
import { ReactComponent as Twitter } from './icon_twitter.svg'

const Input = ({ handleSuccess }) => (
    <Container>
        <H3>Sign Up</H3>
        <P>Join the circle to be notified when pre-release tickets for our first ever world tour go on sale.</P>
        <Form handleSuccess={handleSuccess} />
    </Container>
)

const Success = () => (
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
    const [showSuccess, setShowSuccess] = useState(false)


    const handleSuccess = (event) => {
        event.preventDefault()
        setShowSuccess(true)
    }

    return showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />
}

export default ModalInner
