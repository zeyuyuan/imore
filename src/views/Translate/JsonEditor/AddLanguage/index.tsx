import React, {useState} from 'react';
import styles from './AddLanguage.module.scss';
import {LanguageType} from "../../../../types/translate";

type Props = {
  target: LanguageType;
  onDone: (val: LanguageType) => void;
  onDelete: () => void;
}

const AddLanguage: React.FC<Props> = ({target, onDone, onDelete}) => {
  const [name, setName] = useState<string>(target.name);
  const [label, setLabel] = useState<string>(target.label);
  const [key, setKey] = useState<string>(target.key);
  const [short, setShort] = useState<string>(target.short);

  const doneClickHandler = () => {
    onDone({
      id: target.id,
      name,
      label,
      key,
      short,
      editing: false
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.itemKey}>Name</div>
        <input
          className={styles.itemInput}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.item}>
        <div className={styles.itemKey}>Label</div>
        <input
          className={styles.itemInput}
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <div className={styles.item}>
        <div className={styles.itemKey}>Key</div>
        <input
          className={styles.itemInput}
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <div className={styles.item}>
        <div className={styles.itemKey}>Short</div>
        <input
          className={styles.itemInput}
          type="text"
          value={short}
          onChange={(e) => setShort(e.target.value)}
        />
      </div>
      <button onClick={doneClickHandler}>Done</button>
      <button onClick={() => onDelete()}>Delete</button>
    </div>
  );
};

export default AddLanguage;
