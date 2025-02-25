import { BrowserRouter } from 'react-router-dom';
import {
  Navbar,
  Hero,
  Skills,
  Experience,
  Projects,
  Contact,
} from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
