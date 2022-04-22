// Pages
import Home from './pages/Home.jsx' 

//  Styled Components
import {StyledContainer} from './components/Styles.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <StyledContainer>
        <Home />
      </StyledContainer>
    </Router>
  );
}

export default App;
