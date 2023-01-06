import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopAttraction from './explore/top-attraction/TopAttraction';
import TopDestinations from './explore/top-destination/TopDestinations';
import TopPlaces from './explore/top-places/TopPlaces';
import SocialMedia from './footer/connect-with-us/SocialMedia';
import { Footer } from './footer/footer/Footer';
// import GlobalPresence from './footer/GlobalPresence/GlobalPresence';
import Header from './header/Header'
import TopBanner from './top-banner/TopBanner';
import Login from './header/user-account/Login';
import SignUp from './header/user-account/SignUp';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          
      
          {/* <TopDestinations/>
          <TopPlaces/>
          <TopAttraction/>
          <Footer/> */}
      </Routes>
        
        
       
      </div>  
    </Router>  
  );
}

export default App;
