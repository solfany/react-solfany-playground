import { Bell } from "lucide-react";
import DefaultButton from "../ui/button/DefaultButton";
import { useNavigate } from "react-router-dom";

const NotificationBell = () => {
  const navigate = useNavigate();

  return (
    <div className="notification-center">
      <DefaultButton className="notification-bell" onClick={() => navigate('/notifications')}>
        <Bell size={20} strokeWidth={2} />
        <span className="notification-badge">3</span>
      </DefaultButton>
    </div>
  );
};

export default NotificationBell;
