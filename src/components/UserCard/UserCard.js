import React from "react";
import PropTypes from 'prop-types';
import { WiredImage } from "wired-elements-react/lib/WiredImage";
import "./UserCard.scss";

export const UserCard = ({ email, nickname, fullName, picture }) => {
  return (
    <div className="user">
      <WiredImage className="wired-rendered user__picture" src={picture} elevation={5}/>
      <ul className="user__details">
        <li><b>Nickname:</b> <span>{nickname}</span></li>
        <li><b>Full name:</b> <span>{fullName}</span></li>
        <li><b>E-Mail:</b> <span>{email}</span></li>
      </ul>
    </div>
  )
};

UserCard.propTypes = {
  picture: PropTypes.string,
  fullName: PropTypes.string,
  nickname: PropTypes.string,
  email: PropTypes.string,
};
