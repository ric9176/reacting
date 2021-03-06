import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
    id: 1,
    name: 'Richard',
    phone: '555 555 5555'
},  {
    id: 2,
    name: 'Jonny',
    phone: '555 444 5555'
}, {
    id: 3,
    name: 'Chris',
    phone: '555 333 5555'
}, {
    id:4,
    name: 'Andy',
    phone: '555 666 5555'
}];

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
