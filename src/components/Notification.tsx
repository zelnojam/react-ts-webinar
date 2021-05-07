import React from "react";

interface NotificationProps {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const Notification: React.FC<NotificationProps> = ({
  name,
  username,
  email,
  phone,
  website,
}) => {
  return (
    <div>
      Name: {name}
      <br />
      Username: {username}
      <br />
      Email: {email}
      <br />
      Phone: {phone}
      <br />
      Website: {website}
    </div>
  );
};

export default Notification;
