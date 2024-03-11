import './App.css';
import Navbar from './component/navbar';
import Hero from './component/hero';
import Card from './component/card';
import data from "./data"


function App() {
  const cards = data.map(item => {
    return (
        <Card 
        key={item.id}
        item={item}
        />
    )
})
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
            </section>
    </div>
  );
}

export default App;
