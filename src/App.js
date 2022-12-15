import './App.css';
import TopDestinations from './explore/top-destination/TopDestinations';
import TopPlaces from './explore/top-places/TopPlaces';
import Header from './header/Header'
import TopBanner from './top-banner/TopBanner';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopBanner/>
      <TopDestinations/>
      <TopPlaces/>
    </div>
  );
}

export default App;
