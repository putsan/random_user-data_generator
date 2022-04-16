import React from "react";
import PropTypes from 'prop-types';
import { WiredImage } from "wired-elements-react/lib/WiredImage";
import "./UserCard.scss";

export const UserCard = ({ email, nickname, fullName, picture }) => {
  return (
    <div className="user-card">
      <WiredImage src={picture} />
      <div>
        <p>Nickname: <span>{fullName}</span></p>
        <p>Full name: <span>{nickname}</span></p>
        <p>E-Mail: <span>{email}</span></p>
      </div>
    </div>
  )
};

UserCard.propTypes = {
  picture: PropTypes.string,
  fullName: PropTypes.string,
  nickname: PropTypes.string,
  email: PropTypes.string,
};
