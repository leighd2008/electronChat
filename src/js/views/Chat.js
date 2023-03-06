
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ChatUserList from "../components/ChatUsersList";
import ViewTitle from "../components/shared/ViewTitle";
import ChatMessagesList from "../components/ChatMessagesList";
import { withBaseLayout } from "../layouts/Base";

import { subscribeToChat } from "../actions/chats";

function Chat () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const activeChats = useSelector(({chats}) => {
    return chats.activeChats[id]})
  
  useEffect(() => {
    const unsubFromChat = dispatch(subscribeToChat(id));
    return () => {
      unsubFromChat();
    }
  }, [])
  
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList users={activeChats?.joinedUsers} />
      </div>
      <div className="col-9 fh">
        <ViewTitle text={`Channel: ${activeChats?.name}`} />
        <ChatMessagesList />
      </div>
    </div>
  )
  
}

export default withBaseLayout(Chat, {canGoBack: true})