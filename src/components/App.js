//import logo from '../logo.svg';
//import '../css/App.css';
import '../css/style.css';

// App components
import Header from './Header';
import Body from './Body';

function App() {
  document.title = "Frontend Mentor | Tip calculator app";
  return (  
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
