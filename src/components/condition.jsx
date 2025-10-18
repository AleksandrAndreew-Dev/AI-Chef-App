import React from "react";

export default function Condition() {
  const [unreadMessages, setUnreadMessages] = React.useState(['a']);

  console.log(unreadMessages);



  const quantityMessages = `message${unreadMessages.length > 1 ? 's' : ''}`

  return (
    <div>
      {
        unreadMessages.length === 0 &&  <h3>You're all caught up!</h3>
      }
      {unreadMessages.length === 1 && <h3>You have {unreadMessages.length} {quantityMessages}</h3> }
      {unreadMessages.length > 1 && <h3>You have unread {unreadMessages.length} {quantityMessages}</h3> }



    </div>
  );
}
