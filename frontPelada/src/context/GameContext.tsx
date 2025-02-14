import { createContext, ReactNode, useContext } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
const GameFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' }),
  time: z.string().nonempty({ message: 'A hora deve ser preenchida' }),
  date: z.string().nonempty({ message: 'A data deve ser preenchido' }),
  location: z
    .string()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' }),
});

type GameFormData = z.infer<typeof GameFormSchema>;

const GameContext = createContext<UseFormReturn<GameFormData, object> | null>(
  null,
);

export function GameProvider({ children }: { children: ReactNode }) {
  const formMethods = useForm<GameFormData>({
    resolver: zodResolver(GameFormSchema),
    defaultValues: {
      name: '',
      time: '',
      date: '',
      location: ''
    },
  });
  return (
    <GameContext.Provider value={formMethods}>{children}</GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame deve ser usado dentro de um GameProvider');
  }
  return context;
}
