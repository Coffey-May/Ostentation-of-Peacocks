import React, { useContext, useState, useEffect } from "react";
import { FriendContext } from "./FriendProvider";

export default props => {
  // const { friends } = useContext(FriendContext);
  const { addFriend, friends } = useContext(FriendContext);
  const [friend, setFriend] = useState({});

  const editMode = props.match.params.hasOwnProperty("friendId");

  const handleControlledInputChange = event => {
    /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
    const newFriend = Object.assign({}, friend);
    newFriend[event.target.name] = event.target.value;
    setFriend(newFriend);
  };

  const setDefaults = () => {
    if (editMode) {
      const friendId = parseInt(props.match.params.friendId);
      const selectedFriend = friends.find(a => a.id === friendId) || {};
      setFriend(selectedFriend);
    }
  };

  useEffect(() => {
    setDefaults();
  }, [friends]);

  const constructNewFriend = () => {
    if (editMode) {
      addFriend({
        id: friend.userId,
        initiatorId: parseInt(localStorage.getItem("nutshell_user"))
      }).then(() => props.history.push("/friends"));
    }
  };

  return (
    <form className="FriendForm">
      <h2 className="FriendForm__title">
        {editMode ? "Update Friend" : "Admit Friend"}
      </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Future BFF: </label>
          <input
            type="text"
            id="email"
            required
            autoFocus
            className="form-control"
            proptype="varchar"
            placeholder="Future BFF"
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
        {editMode ? "Save Friend" : "I Can Has BFF"}
      </button>
    </form>
  );
};
