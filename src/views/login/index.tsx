import React, {useState} from 'react';
import styles from './Login.module.scss';
import {LocalsFlag} from "../../enum";
import {urls} from "../../enum/urls";
import request from "../../utils/request";

const Login: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitLogin = () => {
    const params = {
      username: id,
      password,
    };
    request.post(urls.login, params).then((res) => {
      if (res.data.message) {
        localStorage.setItem(LocalsFlag.token, res.data.message.token)
      }
    });
  };

  const getAll = () => {
    request.get(urls.list).then((res) => {
      console.log(res.data);
    });
  };

  const submitRegister = () => {
    const params = {
      username: id,
      password,
    };
    request.post(urls.register, params).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <input className={styles.field} type="text" value={id}
               onChange={(e) => setId(e.target.value)}/>
        <input className={styles.field} type="password" value={password}
               onChange={(e) => setPassword(e.target.value)}/>
        <button className={styles.button} onClick={submitRegister}>Register</button>
        <button className={styles.button} onClick={submitLogin}>Login</button>
        <button className={styles.button} onClick={getAll}>get all</button>
      </div>
    </div>
  );
};

export default Login;
