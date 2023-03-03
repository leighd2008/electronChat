
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";
import BackButton from "./shared/BackButton";

export default function Navbar({canGoBack}) {
  const dispatch = useDispatch();
  const user = useSelector(({auth}) => auth.user)
    
  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <Link
            to='/home'
            className="btn btn-outline-primary">Home</Link>
          <Link 
            to='/settings' 
            className="btn btn-outline-success ml-2">Settings</Link>
        </div>
        <div className="chat-navbar-inner-right">
          { user &&
            <>
              <img className="avatar mr-2" src={user.avatar} alt="avatar" />
              <span className="logged-in-user">Hi, {user.username}</span>
              <button
                onClick={() => dispatch(logout())}
                className="btn btn-outline-danger ml-4" >Logout
              </button>
            </>
          }
          { canGoBack && <BackButton /> }
        </div>
      </nav>
    </div>
  )
}
