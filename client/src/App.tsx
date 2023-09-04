import React, { useEffect } from 'react';
import './App.css';

import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import NavBar from './components/nav-bar/NavBar';
import Home from './components/home/Home';
import Create from './components/create/Create';
import DogDetail from './components/dogs/DogDetail';
import ErrorPage from './components/others/error/ErrorPage';
import { actionCreators } from './redux';
import Welcome from './components/welcome/Welcome';

function App() {
  const dispatch = useDispatch();

  const { getAllDogs, getAllTemperaments } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    getAllTemperaments();
    getAllDogs();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Welcome />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route
          path="/create"
          element={
            <>
              <NavBar />
              <Create />
            </>
          }
        />
        <Route
          path="/dog/:id"
          element={
            <>
              <NavBar />
              <DogDetail />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <ErrorPage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
