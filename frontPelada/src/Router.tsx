import { Routes, Route } from 'react-router';
import { Home } from './pages/Home/index.tsx';
import { Hub } from './pages/Hub/index.tsx';
import { CreateGame } from './pages/CreateGame/index.tsx';
import { Login } from './pages/Login/index.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/hub"
        element={
          <ProtectedRoute>
            <Hub />
          </ProtectedRoute>
        }
      />
      <Route
        path="/createGame/*"
        element={
          <ProtectedRoute>
            <CreateGame />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
