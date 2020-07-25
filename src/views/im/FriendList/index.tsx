import styles from './FriendList.module.scss';
import React from 'react';
import {Friend} from "../../../types/im";
import FriendItem from "../FriendItem";

type Props = {
  friendList: Friend[];
  activeFriend: Friend | null;
  setActiveFriend?: (friend: Friend | null) => void;
}

const FriendList: React.FC<Props> = ({friendList, activeFriend, setActiveFriend}) => {
  const friendClickHandler = (item: Friend) => {
    if (setActiveFriend) {
      setActiveFriend(item);
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
            <FriendItem friend={friend} active={activeFriend ? activeFriend.id === friend.id : false}/>
          </div>
        ))
      }
    </div>
  )
}

export default FriendList;
