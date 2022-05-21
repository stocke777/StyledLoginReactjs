// Pages
import Home from './pages/Home.jsx' 
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dasboard.jsx'

//  Styled Components
import {StyledContainer} from './components/Styles.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { useState } from 'react';

function App() {
  // const [text, setText] = useState("this is default text")
  // fetch("http://localhost:5000/")
  //   .then(response => response.json())
  //   .then(data => setText(JSON.stringify(data)));
  return (
    <Router>
      <StyledContainer>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </StyledContainer>
    </Router>
    // <p>{text}</p>
  );
}

export default App;
