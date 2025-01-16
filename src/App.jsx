import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, Skill, Experience, Contact } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Skill />
        <Experience />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
