import { Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './style/App.css';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';

function App() {
  return (
      <div className="App">
          <Header/>
          <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/:id' element={<UserPage/>}/>
              <Route path='*' element={<MainPage/>}/>
          </Routes>
      </div>
    
  );
}

export default App;
