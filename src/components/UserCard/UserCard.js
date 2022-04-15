import React from "react";
import { WiredImage } from "wired-elements-react/lib/WiredImage";
import "./UserCard.scss";

export const UserCard = () => {
  return (
    <div className="user-card">
      <WiredImage src="https://i.pravatar.cc/150?img=48" />
      <br />
      <span>Nickname:</span>
      <span>Full name:</span>
      <span>Mail:</span>
    </div>
  );
};
