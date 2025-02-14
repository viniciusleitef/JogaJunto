import { useFormState } from 'react-hook-form';
import { useGame } from '../../../context/GameContext';
import { useNavigate } from 'react-router';

export function Name() {
  const navigate = useNavigate();

  const { register, trigger, control } = useGame();

  const { errors } = useFormState({ control });

  const handleNextStep = async () => {
    const isValid = await trigger('name'); // Valida o campo "name"
    if (isValid) {
      navigate('/createGame/location', { state: { stepValid: true } }); // Navega apenas se estiver válido
    }
  };
  return (
    <div className="container">
      <h1>Escolha um nome para o jogo</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Ex: Jogo dos maiorais..."
          {...register('name')}
        />
        <span style={{ color: 'red' }}>
          {errors.name && errors.name.message}
        </span>
      </div>

      <div className="buttons">
        <button onClick={() => navigate(-1)}>Voltar</button>
        <button type="button" onClick={handleNextStep}>
          {' '}
          enviar
        </button>
      </div>
    </div>
  );
}
