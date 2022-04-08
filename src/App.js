import './App.css';
import Home from './pages/Home/Home';
import DocumentMeta from "react-document-meta";

const meta = {
  title: "PersonalityCheck App",
  description: "Take our Personality Test and get a “freakishly accurate” description of who you are and why you do things the way you do.",
  canonical: "https://personalitychecker.netlify.app/",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "personality,introvert,extrovert,test"
    }
  }
};

function App() {
  return (
    <div className="App bodyWrapper">
        <Home />
    </div>
  );
}

export default App;
