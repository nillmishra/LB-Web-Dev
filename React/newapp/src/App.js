import React from 'react';
import './App.css';
import Item from './components/item';
import ItemDate from './components/itemDate';
import './components/card.css';
import Card from './components/card';

function App() {
  const response = [
    {
      itemName: 'Nirma',
      itemDay: '20',
      itemMonth: 'june',
      itemYear: '1956'
    },
    {
      itemName: 'Ghadi',
      itemDay: '04',
      itemMonth: 'may',
      itemYear: '2010'
    },
    {
      itemName: 'Surf Excel',
      itemDay: '13',
      itemMonth: 'december',
      itemYear: '1999'
    },
    {
      itemName: 'Tide',
      itemDay: '31',
      itemMonth: 'april',
      itemYear: '2006'
    }
  ]
  return (
    <div>
      <div className="App">
        Hello Nill
      </div>
      <Card>
        <Item name={response[0].itemName}>Kay Haaal Hai Ji</Item>
        <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}> </ItemDate>

        <Item name={response[1].itemName}> </Item>
        <ItemDate day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}> </ItemDate>

        <Item name={response[2].itemName}> </Item>
        <ItemDate day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}> </ItemDate>

        <Item name={response[3].itemName}> </Item>
        <ItemDate day={response[3].itemDay} month={response[3].itemMonth} year={response[3].itemYear}> </ItemDate>

      </Card>
    </div>
  );
}

export default App;
