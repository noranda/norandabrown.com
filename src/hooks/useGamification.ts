import {useContext} from 'react';
import {GamificationContext} from '../context/gamification/gamificationContext';

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (context === undefined) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
};
