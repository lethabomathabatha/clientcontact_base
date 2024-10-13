import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import TestAPI from './components/TestAPI';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<TestAPI />} />
      </Routes>
    </BrowserRouter>
  )
}
