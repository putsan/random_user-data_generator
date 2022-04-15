import { WiredCard } from "wired-elements-react/lib/WiredCard";
import { DataSettings } from "../DataSettings";
import { UserCard } from "../UserCard";
import "./MainDesk.scss";

const MainDesk = () => {
  return (
    <div className="main-desk">
      <WiredCard elevation={3}>
        <UserCard />
      </WiredCard>

      <WiredCard elevation={3}>
        <DataSettings />
      </WiredCard>
    </div>
  );
};

export default MainDesk;
