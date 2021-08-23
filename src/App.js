import Navbar from './Components/Navbar/Navbar';
import Home from './Components/About/Home';
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';
import './App.scss'

function App() {


  return (
    <div className="App">
      <Navbar />
      <div className="Sections">
      <Home />
      <Projects />
      <Contact />
      </div>
    </div>
  );
}

export default App;
