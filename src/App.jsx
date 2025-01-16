import { BrowserRouter } from 'react-router-dom';
import {
  Navbar,
  Hero,
  Skill,
  Experience,
  Project,
  Contact,
} from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Skill />
        <Experience />
        <Project />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
