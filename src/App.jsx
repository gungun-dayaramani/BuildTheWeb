import Card from './components/card/card';
import Header from './components/header/header';
import "./app.css";
import Collection from './components/Collection/collection';
import Cities from './components/Cities/Cities';
import Gta from './components/Gta/Gta';
import Accordian from './components/Accordian/Accordian';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Card />
      <Collection />
      <Cities />
      <Gta />
      <Accordian />
      <Footer />
    </div>
  );
}

export default App;
