import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './Root';

const AdminRoot = React.lazy(() => import('application/admin'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="admin/*" element={<AdminRoot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
