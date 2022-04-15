import React from "react";
import PropTypes from 'prop-types';
import { WiredImage } from "wired-elements-react/lib/WiredImage";
import "./UserCard.scss";

export const UserCard = ({ mail, nickname, fullName }) => {
  return (
    <div className="user-card">
      <WiredImage src="https://i.pravatar.cc/150?img=48" />
      <div>
        <p>Nickname: <span>{fullName}</span></p>
        <p>Full name: <span>{nickname}</span></p>
        <p>Mail: <span>{mail}</span></p>
      </div>
    </div>
  )
};

UserCard.propTypes = {
  fullName: PropTypes.string,
  nickname: PropTypes.string,
  mail: PropTypes.string,
};
