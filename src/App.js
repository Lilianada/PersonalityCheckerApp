import './App.css';
import BodyContainer from './components/Body/Body';
import FooterSection from './components/Footer/Footer';
import HeaderNav from './components/Header/Header';

function App() {
  return (
    <div className="App bodyWrapper">
      <HeaderNav />
      <BodyContainer />
      <FooterSection />
    </div>
  );
}

export default App;
