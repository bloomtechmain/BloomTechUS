import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="selection:bg-[#ff6b00] selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
