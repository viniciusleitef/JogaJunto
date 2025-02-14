import { Routes, Route, Navigate } from 'react-router';
import { Name } from './Name';
import { Location } from './Location';
import { Time } from './Time';
import { GameProvider } from '../../context/GameContext';
import { CreateGameBox, CreateGameContainer } from './styles';

export function CreateGame() {
  return (
    <CreateGameContainer>
      <CreateGameBox>
        <GameProvider>
          <Routes>
            <Route index element={<Navigate to="name" replace />} />
            <Route path="name" element={<Name />} />
            <Route path="location" element={<Location />} />
            <Route path="time" element={<Time />} />
          </Routes>
        </GameProvider>
      </CreateGameBox>
    </CreateGameContainer>
  );
}
