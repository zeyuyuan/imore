import React, { useState } from 'react'
import styles from './Login.module.scss'
import { LocalsFlag } from '../../enum'
import { urls } from '../../enum/urls'
import request from '../../utils/request'
import Input from '../../components/Input'
import { useHistory } from 'react-router-dom'

const Login: React.FC = () => {
  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [idError, setIdError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const history = useHistory()

  const submitLogin = () => {
    const params = {
      username: id,
      password
    }
    request.post(urls.login, params).then((res) => {
      if (res.data.message) {
        localStorage.setItem(LocalsFlag.token, res.data.message.token)
        history.push('/')
      }
    })
  }

  const handleClickSign = () => {
    setIdError(id.length === 0)
    setPasswordError(password.length === 0)
    if (id && password) {
      submitLogin()
    }
  }

  const handleIdChange = (val: string) => {
    if (val.length > 0) {
      setIdError(false)
    }
    setId(val)
  }

  const handlePasswordChange = (val: string) => {
    if (val.length > 0) {
      setPasswordError(false)
    }
    setPassword(val)
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Sign in</h2>
        <div className={styles.field}>
          <Input
            value={id}
            onChange={handleIdChange}
            placeholder="ID"
            error={idError}
          />
        </div>
        <div className={styles.field}>
          <Input
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            type="password"
            error={passwordError}
          />
        </div>
        <button className={`${styles.button} g-btn--primary`} onClick={handleClickSign}>Sign in</button>
        <div className={styles.tip}>Create a new account if not exists.</div>
      </div>
    </div>
  )
}

export default Login
