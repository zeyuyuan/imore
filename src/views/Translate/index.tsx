import React, { useState } from 'react'
import TagItem from './TagItem'
import { TagType } from '../../types/translate'
import { getUuid } from '../../utils'
import ArticleEditor from './ArticleEditor'
// import styles from './Translate.module.scss';

const Translate: React.FC = () => {
  const a: TagType = {
    id: getUuid(),
    name: '标题',
    format: '<h4>str</h4>',
    color: '#fff'
  }

  const [str, setStr] = useState<string>('哈哈')

  return (
    <div>
      <TagItem tag={a}/>
      <div>{str}</div>
      <ArticleEditor text={str} onUpdate={setStr} />
    </div>
  )
}

export default Translate
