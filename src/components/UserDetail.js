import React from "react";
import UserInfo from "./UserInfo";

function UserDetail (props) {
  //const user = props.user;
  // EXAMPLE: pulling variables out of the path with match.params
  const userId = props.match.params.id;
  // if don't find one, create empty object
  // compares # to string, cannot be ===
  const user = props.users.find(u => u.id == userId) || {};
  return (
    <div>
      <UserInfo user={user} />
      <img src={user.avatar} />
    </div>
  );
}

export default (UserDetail);
