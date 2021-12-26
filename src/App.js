import MainForm from './components/MainForm.js';
import './components/styles/App.css';
import axios from 'axios';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return(
    <div>
      <Router>
          <MainForm/>
      </Router>
    </div>
  );
  
}

export default App;
