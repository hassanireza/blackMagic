export interface SignupPayload {
  name: string
  email: string
}

export type SignupStage = 'idle' | 'submitted'

/**
 * SignupFormController models the two-stage signup flow used inside the
 * modal: collect a name and email, then flip to a confirmation stage. It
 * has no knowledge of React, so it can be unit tested or reused by any
 * presentation layer.
 */
export class SignupFormController {
  private stage: SignupStage = 'idle'
  private payload: SignupPayload | null = null

  public getStage(): SignupStage {
    return this.stage
  }

  public getPayload(): SignupPayload | null {
    return this.payload
  }

  public submit(payload: SignupPayload): SignupStage {
    this.payload = payload
    this.stage = 'submitted'
    return this.stage
  }

  public reset(): SignupStage {
    this.payload = null
    this.stage = 'idle'
    return this.stage
  }
}
