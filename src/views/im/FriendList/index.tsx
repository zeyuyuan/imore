import styles from './FriendList.module.scss';
import React from 'react';
import {Friend} from "../../../types/im";
import FriendItem from "../FriendItem";

type Props = {
  friendList: Friend[];
  activeFriendId?: string;
  setActiveFriendId?: (val: string) => void;
}

const FriendList: React.FC<Props> = ({friendList, activeFriendId, setActiveFriendId}) => {
  const friendClickHandler = (item: Friend) => {
    if (setActiveFriendId) {
      setActiveFriendId(item.id);
    }
  }
  return (
    <div className={styles.friendList}>
      {
        friendList.map((friend) => (
          <div
            className={styles.friendWrapper}
            key={friend.id}
            onClick={() => friendClickHandler(friend)}
          >
            <FriendItem friend={friend} active={friend.id === activeFriendId}/>
          </div>
        ))
      }
    </div>
  )
}

export default FriendList;
