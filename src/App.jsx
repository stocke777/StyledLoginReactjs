// Pages
import Home from './pages/Home.jsx' 
import Login from './pages/Login.jsx'

//  Styled Components
import {StyledContainer} from './components/Styles.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Loader Css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <Router>
      <StyledContainer>
        <Login />
      </StyledContainer>
    </Router>
  );
}

export default App;
