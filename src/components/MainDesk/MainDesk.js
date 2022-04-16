import { useState } from "react";
import { WiredCard } from "wired-elements-react/lib/WiredCard";
import { DataSettings } from "../DataSettings";
import { UserCard } from "../UserCard";
import "./MainDesk.scss";

const defaultUserData = {
  picture: 'https://i.pravatar.cc/150?img=48',
  fullName: 'Full Name',
  nickname: 'nickname',
  email: 'mail@mail.com',
};

const MainDesk = () => {
  const [userData, setUserData] = useState(defaultUserData);

  return (
    <div className="main-desk">
      <WiredCard elevation={3}>
        <UserCard {...userData}/>
      </WiredCard>

      <WiredCard elevation={3}>
        <DataSettings changeUserData={setUserData}/>
      </WiredCard>
    </div>
  );
};

export default MainDesk;
