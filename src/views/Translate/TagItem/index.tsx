import React from 'react'
import styles from './TagItem.module.scss'
import { TagType } from '../../../types/translate'

type Props = {
  tag: TagType
}

const TagItem: React.FC<Props> = ({ tag }) => {
  return (
    <div className={styles.tagItem}>{tag.name}</div>
  )
}

export default TagItem
