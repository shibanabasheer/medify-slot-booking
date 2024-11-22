import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import SearchResults from '../components/SearchResults';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  </Router>
);

export default AppRoutes;
