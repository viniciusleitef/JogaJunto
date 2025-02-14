import { Routes, Route } from 'react-router';
import { Home } from './pages/Home/index.tsx';
import { Hub } from './pages/Hub/index.tsx';
import { CreateGame } from './pages/CreateGame/index.tsx';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hub" element={<Hub />}/>
      <Route path='/createGame/*' element={<CreateGame/>}/>
    </Routes>
  );
}
