import React, {useState} from 'react';
import styles from './Home.module.scss';
import MockData from './Mock.json';
import FriendList from "../FriendList";
import {Friend} from "../../../types/im";

const Home: React.FC = () => {
  const [friendList] = useState<Friend[]>(MockData.friends);
  const [selectFriend, setSelectFriend] = useState<string>('');
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <FriendList
          friendList={friendList}
          activeFriendId={selectFriend}
          setActiveFriendId={setSelectFriend}
        />
      </div>
      <div className={styles.right}>right</div>
    </div>
  )
};

export default Home;
