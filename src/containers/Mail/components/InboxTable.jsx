import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { EmailsProps } from '@/shared/prop-types/EmailProps';
import { Table } from '@/shared/components/TableElements';
import { paddingRight, paddingLeft, right } from '@/utils/directions';
import EmailListItem from './EmailListItem';
import EmailsControls from './EmailsControls';

const InboxTable = ({ emails, onLetter }) => {
  const [selected, setSelected] = useState([]);
  const [pageOfItems, setPageOfItems] = useState(null);
  const [emailsWithID, setEmailsWithID] = useState([]);

  useEffect(() => {
    setEmailsWithID(emails.map((item, index) => ({ ...item, id: `${index}` })));
  }, [emails]);

  const onChangePage = (page) => {
    setPageOfItems(page);
  };

  const onChangeSelect = (isChecked, value) => {
    setSelected(prevChecked => (isChecked ? [...prevChecked, value]
      : prevChecked.filter(prevValue => prevValue !== value)));
  };

  const onChangeSelectAll = isChecked => setSelected(isChecked ? emailsWithID.map(({ id }) => id) : []);

  const isSelectedAll = selected.length === emailsWithID.length;

  return (
    <div>
      <EmailsControls
        emails={emails}
        onChangePage={onChangePage}
        onChangeSelectAll={onChangeSelectAll}
        isSelectedAll={isSelectedAll}
        pageOfItems={pageOfItems}
      />
      <InboxEmailsTable bordered responsive>
        <tbody>
          {emailsWithID.slice(1, 15).map(item => (
            <EmailListItem
              key={item.id}
              email={item}
              itemId={item.id}
              onLetter={onLetter}
              isSelected={selected.includes(item.id)}
              onChangeSelect={onChangeSelect}
            />
          ))}
        </tbody>
      </InboxEmailsTable>
    </div>
  );
};

InboxTable.propTypes = {
  emails: EmailsProps.isRequired,
  onLetter: PropTypes.func.isRequired,
};

export default InboxTable;

// region STYLES

const InboxEmailsTable = styled(Table)`
  margin-bottom: 10px;

  tr td:first-child {
    ${paddingLeft}: 0;
  }

  tr td:last-child {
    ${paddingRight}: 0;
    text-align: ${right};
  }
`;

// endregion
