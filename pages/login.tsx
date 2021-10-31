import React, { useState } from 'react'
import styles from '../styles/login.module.scss'

export default function Login() {
  const initialForm = {
    username: '',
    password: '',
  }
  // const [userName, setUserName] = useState('')
  // const [password, setPassword] = useState('')
  const [form, setForm] = useState(initialForm)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    e.preventDefault()
    setForm({ ...form, [name]: value })
  }
  return (
    <div className={styles.loginContainer}>
      <form method="POST" action="/api/login">
        <input
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className={styles.input}
        />
        <input type="submit" value="Login" className={styles.submitBtn} />
        <p>{form.username}</p>
        <p>{form.password}</p>
      </form>
    </div>
  )
}
