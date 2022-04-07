import { Route, Routes } from 'react-router-dom';
import './App.css';
import QtnAnswer from './components/QuestionsAnswer/QtnAns';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App bodyWrapper">
      <Home/>
      {/* <Routes>
          <Route path="/Home" element={<Home/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
