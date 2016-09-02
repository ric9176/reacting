import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';


class ContactsList extends React.Component {
    render() {
      console.log(this.props.contacts);
      return (
        <ul>
          {this.props.contacts.map((contact)=> {
            return <Contact contact={contact} key={contact.id} />;
          })}
        </ul>
      );
    }
}

export default ContactsList;
