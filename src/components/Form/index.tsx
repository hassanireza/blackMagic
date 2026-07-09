import type { FormEvent } from 'react'
import { Input, Label, Submit } from './styles'
import type { SignupPayload } from '../../core/SignupFormController'

interface FormProps {
  onSubmit: (payload: SignupPayload) => void
}

const FormComponent = ({ onSubmit }: FormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    onSubmit({
      name: String(form.get('name') ?? ''),
      email: String(form.get('email') ?? '')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name: </Label>
      <Input id="name" name="name" type="text" required autoComplete="off" />

      <Label htmlFor="email">Email address: </Label>
      <Input id="email" name="email" type="email" required autoComplete="off" />

      <Submit type="submit">Submit</Submit>
    </form>
  )
}

export default FormComponent
