import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';

let contacts = {
  name: 'Richard',
  phone: '555 555 5555'
};

class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Contacts List</h1>
          <ContactsList contacts={this.props.contacts} />
        </div>
      );
    }
}

ReactDOM.render(<App contacts={contacts} />, document.getElementById('app'));
