
import React from "react";
import { useParams } from "react-router-dom";

import ChatUserList from "../js/components/ChatUsersList";
import ViewTitle from "../js/components/shared/ViewTitle";
import ChatMessagesList from "../js/components/ChatMessagesList";

export default function Chat () {
  const { id } = useParams();
  
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList />
      </div>
      <div className="col-9 fh">
        <ViewTitle text={`Joined channel: ${id}`} />
        <ChatMessagesList />
      </div>
    </div>
  )
  
}