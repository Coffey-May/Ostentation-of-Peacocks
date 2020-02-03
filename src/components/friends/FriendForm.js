import React, { useContext, useState, useEffect, useRef } from "react";
import { FriendContext } from "./FriendProvider";
import { UserContext } from "../auth/UserProvider";

export default props => {
  const { addFriend, friends } = useContext(FriendContext);
  const { users } = useContext(UserContext);
  const [friend, setFriend] = useState({});
  const friendName = useRef("");

  /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */

  const handleControlledInputChange = event => {
    const newFriend = Object.assign({}, friend);
    newFriend[event.target.name] = event.target.value;
    setFriend(newFriend);
  };

  const constructNewFriend = () => {
    const friendUserName = friendName.current.value;
    const initiatorId = parseInt(localStorage.getItem("nutshell_user"));
    const foundUser = users.find(user => user.userName === friendUserName);
    if (foundUser === undefined) {
      alert("User not found");
    } else {
      const foundExistingFriend = friends.find(
        friendRel =>
          friendRel.userId === foundUser.id &&
          initiatorId === friendRel.initiatorId
      );
      if (initiatorId !== foundUser.id) {
        if (foundExistingFriend === undefined) {
          addFriend({
            userId: foundUser.id,
            initiatorId: parseInt(localStorage.getItem("nutshell_user"))
          }).then(() => props.history.push("/friends"));
        } else {
          alert("User is already a friend");
          {
            friendName.current.value = "";
          }
        }
      } else {
        alert("You can't add yourself");
        {
          friendName.current.value = "";
        }
      }
    }
  }
      
    return (
      <form className="FriendForm">
        <h2 className="FriendForm__title"></h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Future BFF: </label>
            <input
              type="text"
              name="friendName"
              required
              autoFocus
              className="form-control"
              ref={friendName}
              proptype="varchar"
              placeholder="Friend name"
              defaultValue={friend.userId}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>

        <button
          type="submit"
          onClick={evt => {
            evt.preventDefault();
            constructNewFriend();
          }}
          className="btn btn-primary"
        >
          Add Friend
        </button>

        
      </form>
    );
  
};
