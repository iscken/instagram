import './App.css';
// import Admin from './Components/admin';
import Header from './Components/Header';
import HeaderCart from './Components/HeaderCart';
// import Home from './Components/home';


function App() {
  return (
   <center>
     <div className="App">
      {/* <Admin/> */}
      <Header/>
      <HeaderCart/>
      {/* <Home/> */}
    </div>
   </center>
  );
}

export default App;
