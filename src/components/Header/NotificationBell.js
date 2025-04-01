import { Bell } from "lucide-react";
import Button from "../ui/button/DefaultButton";
import { useNavigate } from "react-router-dom";

const NotificationBell = () => {
  const navigate = useNavigate();

  return (
    <div className="notification-center">
      <Button className="notification-bell" onClick={() => navigate('/notifications')}>
        <Bell size={20} strokeWidth={2} />
        <span className="notification-badge">3</span>
      </Button>
    </div>
  );
};

export default NotificationBell;
