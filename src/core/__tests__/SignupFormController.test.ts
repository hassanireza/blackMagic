import { describe, expect, it } from 'vitest'
import { SignupFormController } from '../SignupFormController'

describe('SignupFormController', () => {
  it('starts in the idle stage', () => {
    const controller = new SignupFormController()
    expect(controller.getStage()).toBe('idle')
    expect(controller.getPayload()).toBeNull()
  })

  it('moves to the submitted stage and stores the payload', () => {
    const controller = new SignupFormController()
    const stage = controller.submit({ name: 'Ada', email: 'ada@example.com' })
    expect(stage).toBe('submitted')
    expect(controller.getPayload()).toEqual({ name: 'Ada', email: 'ada@example.com' })
  })

  it('resets back to idle and clears the payload', () => {
    const controller = new SignupFormController()
    controller.submit({ name: 'Ada', email: 'ada@example.com' })
    const stage = controller.reset()
    expect(stage).toBe('idle')
    expect(controller.getPayload()).toBeNull()
  })
})
