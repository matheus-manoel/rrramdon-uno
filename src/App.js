import React from 'react';
import './App.css';
import Header from './components/Header';
import CardGrid from './components/CardGrid';

function App() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    fetch("https://gist.githubusercontent.com/matheus-manoel/5e28ca7e3d46278fc722be484da3ec3b/raw/custom_wild_cards.json")
      .then(res => res.json())
      .then(
        (result) => {
          setCards(result)
        },
        (error) => {
          React.setState({
            isLoaded: true,
            error
          });
        }
      )
  }, [])

    return (
      <div>
        <Header />
        <CardGrid cards={cards}/>
      </div>
    );
  }

    export default App;
