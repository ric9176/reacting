import React from 'react';
import ReactDOM from 'react-dom';

class ContactsList extends React.Component {
    render() {
      console.log(this.props.contacts);
      return (
        <ul>
          <li>{this.props.contacts.name} {this.props.contacts.phone}</li>
        </ul>
      );
    }
}

export default ContactsList;
