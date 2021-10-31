import * as React from 'react'

type ButtonEvent = React.MouseEvent<HTMLButtonElement>
type InputEvent = React.ChangeEvent<HTMLInputElement>
type FormsSubmitEvent = React.FormEvent<HTMLInputElement>

type InitialForm = {
  username: string
  password: string
}
