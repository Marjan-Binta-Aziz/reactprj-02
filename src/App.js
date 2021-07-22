import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import {Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
      
    <Switch>
  <Route path='/'> <Home/> </Route>
  <Route path='/about'> <About/></Route>
  <Route path='/contact'> <Contact/> </Route>
    </Switch> 
   
    <Footer/>
    </div>
  );
}

export default App;
