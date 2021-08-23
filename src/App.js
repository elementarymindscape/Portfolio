import Navbar from './Components/Navbar/Navbar';
import Home from './Components/About/Home';
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';
import './App.scss'
import { useState } from 'react';
import SidebarMenu from './Components/Sidebar-Menu/Sidebar-Menu';

function App() {

  const [active, setActive] = useState(false);

  return (
    <div className="App">
      <Navbar active={active} setActive={setActive} />
      <SidebarMenu active={active} setActive={setActive}/>
      <div className="Sections">
      <Home />
      <Projects />
      <Contact />
      </div>
    </div>
  );
}

export default App;
