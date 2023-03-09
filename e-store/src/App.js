import React, { useEffect } from "react"
import { useDispatch } from 'react-redux';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import AppRoutes from "./components/Routes/AppRouts";
import { getCategories } from "./features/categories/categoriesSlice";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])


  return (
    <div className="App">
      <Header />
      <HomePage />
      <AppRoutes />
      <Footer />



    </div>
  );
}

export default App;
