import React, {MouseEventHandler} from 'react';
import styles from './Dialog.module.scss';
import {CSSTransition} from 'react-transition-group';

type Props = {
  // children: React.ReactNode;
  visible: boolean;
  setVisible: (val: boolean) => void;
}

const Dialog: React.FC<Props> = ({visible, setVisible}) => {
  const maskClickHandler = () => {
    if (setVisible) {
      setVisible(false);
    }
  };
  const scrollClickHandler: MouseEventHandler = (e) => {
    e.stopPropagation();
  }
  return (
    <CSSTransition in={visible} timeout={200} unmountOnExit classNames="dialog">
      <div className={styles.mask} onClick={maskClickHandler}>
        <div className={styles.scroll}>
          <div className={styles.box} onClick={scrollClickHandler}>a</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Dialog;
