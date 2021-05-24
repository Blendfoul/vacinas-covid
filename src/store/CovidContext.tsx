import React from 'react';

interface CovidStore {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}

const CovidContext = React.createContext({} as CovidStore);

export default CovidContext;
