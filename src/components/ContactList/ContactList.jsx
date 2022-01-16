import React from 'react';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {' '}
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
