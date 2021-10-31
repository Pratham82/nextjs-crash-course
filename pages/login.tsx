import React, { useState } from 'react'
import styles from '../styles/login.module.scss'
import {
  ButtonEvent,
  InputEvent,
  InitialForm,
  FormsSubmitEvent,
} from '../types/types'
import Router from 'next/router'

export default function Login() {
  const initialForm = {
    username: '',
    password: '',
  }
  // const [userName, setUserName] = useState('')
  // const [password, setPassword] = useState('')
  const [form, setForm] = useState<InitialForm>(initialForm)
  const [message, setMessage] = useState<String>('')
  const handleChange = (e: InputEvent) => {
    const { name, value } = e.target
    e.preventDefault()
    setForm({ ...form, [name]: value })
  }

  const submitForm = (e: FormsSubmitEvent) => {
    e.preventDefault()
    const authenticate = async () => {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
      const { token, success, message } = await res.json()
      console.log({ success, message })
      if (success === true) {
        // redirect to authenticated page
        Router.push('/home')
        console.log(token)

        // Add token in local storage
      }
      success === true ? Router.push('/home') : setMessage(message)
      setForm(initialForm)
    }

    authenticate()
  }

  return (
    <div className={styles.loginContainer}>
      {/* <form method="POST" action="/api/login"> */}
      <form>
        <h3>Username</h3>
        <input
          name="username"
          type="text"
          value={form.username}
          placeholder="Enter Username"
          onChange={handleChange}
          className={styles.input}
        />
        <h3>Password</h3>
        <input
          name="password"
          type="password"
          value={form.password}
          placeholder="Enter Password"
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="submit"
          value="Login"
          className={styles.submitBtn}
          onClick={e => submitForm(e)}
        />
      </form>
      {message && <h2>{message}</h2>}
    </div>
  )
}
