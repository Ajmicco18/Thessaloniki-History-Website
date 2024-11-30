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

function App() {

  const year = new Date().getFullYear()

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
      <footer> Designed and Developed by Anthony Micco &copy;{year} </footer>
    </>
  )
}

export default App
