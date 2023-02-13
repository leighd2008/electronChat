

import React from "react";
import JoinedChatsList from "../js/components/JoinedChatsList";
import AvailableChatsList from "../js/components/AvailableChatsList";
import ViewTitle from "../js/components/shared/ViewTitle";

export default function Home() {
 
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatsList />
      </div>
      <div className="col-9 fh">
        <ViewTitle text="Choose your channel" />
        <AvailableChatsList />
      </div>
    </div>
  )
}