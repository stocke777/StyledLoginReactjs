// Pages
import Home from './pages/Home.jsx' 
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

//  Styled Components
import {StyledContainer} from './components/Styles.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


// Loader Css


function App() {
  return (
    <Router>
      <StyledContainer>
        <Signup />
      </StyledContainer>
    </Router>
  );
}

export default App;
