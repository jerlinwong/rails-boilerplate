import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Admin: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<div>hello world</div>}></Route>
    </Routes>
  );
};

export default Admin;
