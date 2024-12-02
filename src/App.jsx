import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import References from './components/References';
import Gallery from './components/Gallery';
import "./index.css"

function App() {

  return (
    <>
      <Nav></Nav>
      <Router basename='/Thessaloniki-History-Website/'>
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
