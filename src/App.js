import './App.css';
import Landing from './components/landing/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router basename='fellowship-platforms-2024'>
        <Routes>
          <Route path='/' element={<><Landing /></>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
