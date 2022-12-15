import './App.css';
import TopDestinations from './explore/top-destination/TopDestinations';
import Header from './header/Header'
import TopBanner from './top-banner/TopBanner';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopBanner/>
      <TopDestinations/>
    </div>
  );
}

export default App;
