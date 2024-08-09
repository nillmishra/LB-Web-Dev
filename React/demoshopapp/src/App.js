import logo from './logo.svg';
import './App.css';
import Item from './component/Item';  
import ItemDate from './component/ItemDate';
import Card from './component/card'

function App() {
  const products = [{
    id : 'p1',
    title : 'Surf Excel',
    price : '130',
    date : new Date(2021, 7, 10)
  },
  {
    id : 'p2',
    title : 'Ariel',
    price : '135',
    date : new Date(2021, 8, 10)
  },
  {
    id : 'p3',
    title : 'Tide',
    price : '140',
    date : new Date(2021, 2, 2)
  },
  {
    id : 'p4',
    title : 'Nirma',
    price : '120',
    date : new Date(2021, 12, 28)
  }
]

  return (
    
    <div>
    <Products items={products} />
    </div>
  );
}

export default App;
