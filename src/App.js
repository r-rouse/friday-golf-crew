import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import Player from './pages/Player';
import { Course } from './pages/Course';
import ScorecardForm from './components/ScorecardForm';


function App() {
  return (
    <div className="App">
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <BrowserRouter>
            <Routes>
              <Route
                path='/form/1'
                element={
                  <ScorecardForm />
                }
              />
              {/* <Route
                path='/form/2'
                element={
                  <Home />
                }
              />
              <Route
                path='/form/3'
                element={
                  <Home />
                } */}
              {/* /> */}
              <Route
                path='/players/:id'
                element={
                  <Player />
                }
              />
              <Route
                path='/course/:id'
                element={
                  <Course />
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
