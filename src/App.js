import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';

import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminRoute from './components/AdminRoute';
import routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <ToastContainer position="bottom-center" limit={1} />
        <Header />
        <main>
          <Container className="mt-3">
            <Routes>
              {routes.map((route) => {
                if (route.private)
                  return (
                    <Route
                      path={route.path}
                      key={route.path}
                      element={<ProtectedRoute {...route} />}
                    />
                  );
                else if (route.adminOnly)
                  return (
                    <Route
                      path={route.path}
                      key={route.path}
                      element={<AdminRoute {...route} />}
                    />
                  );
                else
                  return (
                    <Route
                      path={route.path}
                      key={route.path}
                      element={<route.component />}
                    />
                  );
              })}
            </Routes>
          </Container>
        </main>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
