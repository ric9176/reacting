import React from 'react';
import ReactDOM from 'react-dom';

const Contact = ({contact}) =>
          <li>
            {contact.name} {contact.phone}
          </li>

export default Contact;
