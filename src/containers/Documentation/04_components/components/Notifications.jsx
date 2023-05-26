import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const Notifications = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Notifications</CardTitle>
      </CardTitleWrap>
      <p>
        Notifications are based on 
        <a href="https://github.com/react-component/notification">
          rc-notification
        </a>.
        Example of using this component here:
      </p>
      <CodeHighlither>
        {`import React from 'react';
import PropTypes from 'prop-types';
import { BasicNotification } from '@/shared/components/Notification';

const BasicNotifications = ({ showNotification }) => {
  const show = (position) => {
    showNotification({
      notification: (
        <BasicNotification
          title='Remember!'
          message='Learning day desirous informed expenses material returned six the.
          She enabled invited exposed him another.'
        />
      ),
      position: position
    });
  };

  return (
    <Button variant="outline-secondary" onClick={() => show('left-up')}>Left Up</Button>
  )
};

BasicNotifications.propTypes = {
  showNotification: PropTypes.func.isRequired,
};

export default BasicNotifications;
`}
      </CodeHighlither>
    </CardBody>
  </Card>
);

export default Notifications;
