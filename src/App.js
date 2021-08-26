import Navbar from './Components/Navbar/Navbar';
import Home from './Components/About/Home';
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';
import './App.scss'
import { useState } from 'react';
import SidebarMenu from './Components/Sidebar-Menu/Sidebar-Menu';

function App() {

  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState('theme1');

  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme} active={active} setActive={setActive} />
      <SidebarMenu theme={theme} setTheme={setTheme} active={active} setActive={setActive}/>
      <div className="Sections">
      <Home theme={theme} setTheme={setTheme}/>
      <Projects theme={theme} setTheme={setTheme}/>
      <Contact theme={theme} setTheme={setTheme}  />
      </div>
    </div>
  );
}

export default App;
