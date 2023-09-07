import logo from './logo.svg';
import Header from './Header';
import './App.css';
import Cheese from './Cheese';
import { useState } from 'react';

function App() {
  let factAboutCheese = 'cheese is the best';

  const [numberOfClicks, setNumberOfClicks] = useState(1);
  const [cheesesArray, setCheesesArray] = useState([
    {
      name: 'gruyere',
      imageUrl: "https://bovafoods.com/wp-content/uploads/2020/05/DAI292.jpg",
      deliciousness: 6
    },
    {
      name: 'cheddar',
      imageUrl: "https://i0.wp.com/homesteadersofamerica.com/wp-content/uploads/2022/01/How-to-Make-Cheddar-Cheese-17.jpg?resize=1024%2C683&ssl=1",
      deliciousness: 10
    },
    {
      name: 'parmesan',
      imageUrl: "https://vincentsmeatmarket.com/wp-content/uploads/2021/02/Grater-bottle-scaled.jpg",
      deliciousness: 8
    },
    {
      name: 'bleu',
      imageUrl: "https://cheese-etc.co.uk/wp-content/uploads/2020/02/shropshire-blue-cheese.jpeg",
      deliciousness: 4
    },
  ]);

  function addACheese() {
    console.log('we are adding a cheese');
    // note: .push is not going to work
    let newCheeses = [...cheesesArray, {
      name: 'manchego',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/58d5711a9f7456928cbaf420/1529692740910-4D47P1844VI8SAWTY61Y/Image+%5BSquare%5D.jpg',
      deliciousness: 9
    }];
    setCheesesArray(newCheeses);
    // cheesesArray.push({
    //   name: 'manchego',
    //   imageUrl: '',
    //   deliciousness: 9
    // })
  }
  function updateCheeseDeliciousness(cheeseToUpdate) {
    // want to make a new array that contain mostly the same cheeses
    // except, for the cheese we want to update, we want to change its deliciousness
    let newCheeses = cheesesArray.map(
      ch => ch === cheeseToUpdate ?
        ({ ...ch, deliciousness: ch.deliciousness + 1 }) :
        ch
    )
    setCheesesArray(newCheeses);
  }
  function deleteACheese(cheeseToDelete) {
    let newCheeses = cheesesArray.filter(ch => ch !== cheeseToDelete);
    setCheesesArray(newCheeses);
  }
  // change this array into another array where I've transformed each of the elements
  // let cheesesLIs = cheesesArray.map(ch => <li>{ch}</li>)
  return (
    <div>
      {/* how to render another component: import it at the top of the file and then write it as if it's an HTML element inside the HTML part of the file */}
      {/* passing parameters to React components is called passing props - props are information that a parent component gives to a child component */}
      <Header
        factAboutCheese={factAboutCheese}
        someOtherString="bleu cheese"
        numberOfClicks={numberOfClicks}
        setNumberOfClicks={setNumberOfClicks}
      />
      <main className="main">
        <button onClick={addACheese}>Add a Cheese</button>
        <h3>Our Cheeses</h3>
        <ul>
          {/* {cheesesLIs} */}
          {/* the key is something to uniquely identify each LI for React's sake */}
          {cheesesArray.map(ch => <Cheese
            cheese={ch}
            key={ch.name}
            numberOfClicks={numberOfClicks}
            deleteACheese={deleteACheese}
            updateCheeseDeliciousness={updateCheeseDeliciousness}
          />)}
        </ul>
        <table>
          {/* tables contain a thead and a tbody */}
          {/* each contains tr (table row) */}
          {/* each row contains either th (header data) or td(table data) */}
          <thead>
            <tr>
              <th>Cheese Name</th>
              <th>Cheese Picture</th>
            </tr>
          </thead>
          <tbody>
            {cheesesArray.map(ch => <tr key={ch.name}>
              <td>{ch.name}</td>
              <td><img src={ch.imageUrl} /></td>
            </tr>)}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
