import React from 'react';
import Card from './Compnents/cards';
import Contacts from './Compnents/contacts'

function create(term){
  return (
    <Card
    name={term.name}
    tel={term.tel}
    email={term.email}
    />
  )
}

function App() {
  return (
  <div>
  <h1>My contacts</h1>

  <div>{Contacts.map(create)}</div>
   <Card
  name={Contacts[0].name}
  tel={Contacts[0].tel}
  email={Contacts[0].email}

  />
  
  
   <Card
   name={Contacts[1].name}
   tel={Contacts[1].tel}
   email={Contacts[1].email} 
  />
  <Card
   name={Contacts[2].name}
   tel={Contacts[2].tel}
   email={Contacts[2].email} 
  />
  </div>
    
  );
}

export default App;
