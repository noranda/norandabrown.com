import { createContext, FC, ReactNode, useContext, useState } from 'react';

type ParallaxProps = {
  on: boolean;
  toggleParallax: () => void;
};

export const ParallaxContext = createContext<ParallaxProps>({
  on: true,
  toggleParallax: () => {},
});

export const useParallaxContext = () => useContext(ParallaxContext);

type ParallaxContextProviderProps = {
  children: ReactNode;
};

const ParallaxContextProvider: FC = ({ children }: ParallaxContextProviderProps) => {
  const [on, setOn] = useState(true);
  const toggleParallax = () => setOn(!on);
  return <ParallaxContext.Provider value={{ on, toggleParallax }}>{children}</ParallaxContext.Provider>;
};

export default ParallaxContextProvider;
