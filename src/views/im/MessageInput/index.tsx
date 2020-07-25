import React from 'react';
import styles from './MessageInput.module.scss';

const MessageInput: React.FC = () => {
  return (
    <div className={styles.inputWrapper}>
      <input className={styles.input} type="text" placeholder="Enter to send" />
    </div>
  );
};

export default MessageInput;
