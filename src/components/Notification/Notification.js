import { Message } from 'semantic-ui-react';

import './Notification.css';

function Notification({ content, type}) {
  return (
    <Message className={`notification ${type}`} compact>
      <p>{content}</p>
    </Message>
  );
}

export default Notification;
