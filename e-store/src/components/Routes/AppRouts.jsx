import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

const AppRoutes = () => {
        <Routes>
            <Route index element={<HomePage/>}/>
        </Routes>
   
};

export default AppRoutes;