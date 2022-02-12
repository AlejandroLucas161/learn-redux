import './App.css';
 
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HomePage } from './containers/HomePage';
import { UserPage } from './containers/UserPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/user/:userId' element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
