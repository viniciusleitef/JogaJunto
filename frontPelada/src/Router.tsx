import { Routes, Route } from 'react-router';
import { Home } from './pages/Home/index.tsx';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
