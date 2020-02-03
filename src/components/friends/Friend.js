import React, { useContext } from "react"
import { FriendContext } from "./FriendProvider";


export default ({ friend }) => {
    const { deleteFriend } = useContext(FriendContext)
    return (
      <section className="friend">
        <h3 className="friend__name">{friend.user.userName}</h3>
        <button className="btn--friendDelete"
          onClick={() => {
            deleteFriend(friend)
          }}
        >
          Remove Friend
        </button>
      </section>
    );
  };

