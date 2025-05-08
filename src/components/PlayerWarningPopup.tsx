import { useEffect } from 'react';
import { OnPlayerWarning, PlayerWarning } from '../types/GameProps';

type PlayerWarningPopupProps = {
  playerWarning: PlayerWarning;
  onPlayerWarning: OnPlayerWarning;
};

function PlayerWarningPopup({
  playerWarning,
  onPlayerWarning,
}: PlayerWarningPopupProps) {
  useEffect(() => {
    if (!playerWarning) return;

    const timer = setTimeout(() => {
      // Clear the warning after 3 seconds
      onPlayerWarning('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [playerWarning, onPlayerWarning]);

  return playerWarning ? (
    <div className='player-warning-popup'>
      <p>{playerWarning}</p>
    </div>
  ) : null;
}

export default PlayerWarningPopup;
