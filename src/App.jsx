import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black overflow-x-hidden'>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
