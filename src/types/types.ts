export interface InputType {
  name: string
  label: string
  type: string
  options?: [string]
  checked?: boolean
  value?: string
}

export interface SubmissionData {
    firstName: string,
    lastName: string,
    userName: string,
    defaultEmail: string,
    title: string,
    designation: string,
    defaultInterface: string,
    preferredLanguage: string,
    accountLocked: boolean,
    userMustChangePassword: boolean,
    passwordsNeverExpire: boolean,
    superUser: boolean,
}

export interface PreferredLanguage {
    label: string,
    value: string
}

export interface eventData {
  name: string,
  value: string | boolean
}