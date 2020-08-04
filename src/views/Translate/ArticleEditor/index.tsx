import React from 'react'
import styles from './ArticleEditor.module.scss'

type Props = {
  text: string
  onUpdate: (val: string) => void
}

const ArticleEditor: React.FC<Props> = ({ text, onUpdate }) => {
  return (
    <div className={styles.editor} contentEditable={true}>{text}</div>
  )
}

export default ArticleEditor
