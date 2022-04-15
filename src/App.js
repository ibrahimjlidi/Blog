
import Navbar from './navbar';
import Home from './Home';

function App() {
const title = 'welcome to new blog'; 


  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        <h1> {title} </h1>
      </div>
    
    </div>
  );
}

export default App;
