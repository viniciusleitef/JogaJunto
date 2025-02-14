import { useNavigate } from 'react-router';
import { useGame } from '../../../context/GameContext';
import { useFormState } from 'react-hook-form';
import { useEffect } from 'react';

export function Time() {
  const navigate = useNavigate();
  const { register, trigger, control, watch } = useGame();
  const { errors } = useFormState({ control });
  const handleNextStep = async () => {
    const isValid = await trigger(['time', 'date']);
    if (isValid) {
      console.log(console.log(watch()));
    }
  };

  useEffect(() => {
    const getNameAndLocation = async () => {
      const name = await trigger('name');
      const location = await trigger('location');
      if (!name || !location) {
        navigate('/createGame/name');
      }
    };
    getNameAndLocation();
  }, []);

  return (
    <div className="container">
      <h1>Qual foi a hora e data do jogo ?</h1>
      <div className="input-box">
        <input type="time" {...register('time')} />
        {errors.time && (
          <span style={{ color: 'red' }}>{errors.time.message}</span>
        )}
        <input type="date" {...register('date')} />
        {errors.date && (
          <span style={{ color: 'red' }}>{errors.date.message}</span>
        )}
      </div>

      <div className="buttons">
        <button onClick={() => navigate(-1)}>Voltar</button>
        <button type="button" onClick={handleNextStep}>
          Criar Jogo
        </button>
      </div>
    </div>
  );
}
