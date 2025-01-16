import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black overflow-x-hidden'>
        <Navbar />
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
