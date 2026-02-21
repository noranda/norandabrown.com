import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useGamification} from './useGamification';

export const usePageTracking = () => {
  const {pathname} = useLocation();
  const {trackPageVisit} = useGamification();

  useEffect(() => {
    trackPageVisit(pathname);
  }, [pathname, trackPageVisit]);
};
