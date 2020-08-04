import React from 'react'
import styles from './Input.module.scss'

type Props = {
  value: string
  onChange: (val: string) => void
  placeholder: string
  type?: string
  error?: boolean
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  error = false
}) => {
  return (
    <div className={`${styles.wrapper} ${error ? styles.error : ''}`}>
      <input
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        autoComplete="off"
        required
      />
      <span className={styles.label}>{placeholder}</span>
    </div>
  )
}

export default Input
