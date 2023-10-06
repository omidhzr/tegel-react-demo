import { useContext } from 'react';
import { UserContext } from '../App';

const NotificationPage = () => {
  const userContext = useContext(UserContext);

  const handleNotificationClearence = () => {
    userContext?.updateUser({
      userName: userContext.user.userName,
      placeOfWork: userContext.user.placeOfWork,
      notifications: [],
    });
  };
  return (
    <>
      <h2>
        {userContext?.user.notifications && userContext?.user.notifications.length > 0
          ? 'Notifications'
          : 'No new notifications'}
      </h2>
      <div className="tds-u-flex tds-u-flex-dir-col tds-u-gap2">
        {userContext?.user.notifications?.map((notification, index) => {
          return (
            <tds-message
              variant={notification.type}
              key={`notification-${index}`}
              header={`Notification ${index + 1}`}
            >
              {notification.notification}
            </tds-message>
          );
        })}
      </div>
      {userContext?.user.notifications && userContext?.user.notifications.length > 0 && (
        <>
          <tds-button
            id="clear-notifications-btn"
            text="Clear notifications"
            size="md"
          ></tds-button>
          <tds-modal selector="#clear-notifications-btn">
            <h5 className="tds-modal-headline" slot="header">
              Are you sure?
            </h5>
            <div slot="body">
              This will remove all your notifications. Make sure you have addressed them before.
            </div>
            <tds-button
              slot="actions"
              data-dismiss-modal
              size="md"
              text="Delete"
              variant="danger"
              onClick={handleNotificationClearence}
            ></tds-button>
            <tds-button slot="actions" data-dismiss-modal size="md" text="Cancel"></tds-button>
          </tds-modal>
        </>
      )}
    </>
  );
};

export default NotificationPage;
