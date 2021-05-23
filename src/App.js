import React, { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';


function App(props) {

  const [listItem, setListItem] = useState('');

  const [items, setItems] = useState([]);

  const onChangeHandler = (event) => {
    setListItem(event.target.value);
}

  const onClickHandler = () => {
    setItems( (prevState) => {
      return [...prevState, listItem]
    });
    setListItem('');
  }
  
  const onDeleteHandler = (id) => {
    console.log("deleted");

    setItems((prevState) => {
      return prevState.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="app">
      <Header />
      <Input 
      click={onClickHandler} 
      change={onChangeHandler} 
      inputfield={listItem}
      />
      <ol>
        {items.map((item, index) => {
          return <List 
          key={index} 
          id={index} 
          type={item} 
          onDelete={onDeleteHandler} 
          /> 
          })}
      </ol>
    </div>
  );
}

export default App;
