import './App.css';
import BuyCupcake from './components/BuyCupcake';
import Logo from './components/Logo';
import TopNav from './components/TopNav';
import Welcome from './components/Welcome';
import WhoWeAre from './components/WhoWeAre';

function App() {
  return (
    <div className="App">
    
    <TopNav />
    <Welcome />
    < WhoWeAre />
    <BuyCupcake/>
    </div>
  );
}

export default App;
