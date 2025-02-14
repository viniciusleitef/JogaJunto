import { useFormState } from 'react-hook-form';
import { useGame } from '../../../context/GameContext';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export function Location() {
  const { register, trigger, control } = useGame();
  const { errors } = useFormState({ control });
  const navigate = useNavigate();
  const handleNextStep = async () => {
    const isValid = await trigger('location');
    if (isValid) {
      navigate('/createGame/time');
    }
  };

  useEffect(() => {
    const getname = async () => {
      const isValid = await trigger('name');
      if (!isValid) {
        navigate('/createGame/name');
      }
    };

    getname();
  }, []);

  return (
    <div className="container">
      <h1>Onde ocorreu o jogo ?</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Arena Paraíba..."
          {...register('location')}
        />
        {errors.location && (
          <span style={{ color: 'red' }}>{errors.location.message}</span>
        )}
      </div>
      <div className="buttons">
        <button onClick={() => navigate(-1)}>Voltar</button>
        <button onClick={handleNextStep} type="button">
          Próximo{' '}
        </button>
      </div>
    </div>
  );
}
