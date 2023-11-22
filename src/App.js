import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components';
import './App.css';
import Cursor from '../src/components/cursor';

function App() {
  
  return (
<div className="App">
<Cursor />
  <Header />
  <AllRoutes /> 
  <Footer />
</div>
  ) 
  }
export default App;
