import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import References from './References';
import Gallery from './Gallery';
import "./index.css"

function App() {

  return (
    <>
      <Nav></Nav>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />} />
          <Route
            path="/References"
            element={<References />} />
          <Route
            path="/Gallery"
            element={<Gallery />} />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
